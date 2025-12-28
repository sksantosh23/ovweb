import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { 
  validateCorporateEmail, 
  validatePhoneNumber, 
  isWeekday,
  generateTimeSlots 
} from '@/lib/booking-utils';
import { sendBookingEmails } from '@/lib/email-service';

const prisma = new PrismaClient();

// Valid team types
const VALID_TEAMS = ['MARKETING', 'SALES', 'PRODUCT'];

// Valid product categories
const VALID_PRODUCTS = ['EHP', 'OIMS', 'PAYNET', 'CLICKCONNECT', 'BLOK', 'GENERAL'];

// Valid time slots
const VALID_TIME_SLOTS = generateTimeSlots().map(s => s.startTime);

interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  team: string;
  productCategory: string;
  description: string;
  date: string;
  startTime: string;
  timezone: string;
}

/**
 * POST /api/bookings
 * 
 * Create a new consultation booking
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    let body: BookingRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      team,
      productCategory,
      description,
      date,
      startTime,
      timezone,
    } = body;

    // =====================
    // Validation
    // =====================

    // Required fields check
    if (!firstName || !lastName || !email || !phoneNumber || !team || !productCategory || !description || !date || !startTime || !timezone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate names
    if (firstName.trim().length < 2 || lastName.trim().length < 2) {
      return NextResponse.json(
        { error: 'First name and last name must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Validate email (corporate only)
    const emailValidation = validateCorporateEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.error },
        { status: 400 }
      );
    }

    // Validate phone number
    const phoneValidation = validatePhoneNumber(phoneNumber);
    if (!phoneValidation.valid) {
      return NextResponse.json(
        { error: phoneValidation.error },
        { status: 400 }
      );
    }

    // Validate team
    if (!VALID_TEAMS.includes(team.toUpperCase())) {
      return NextResponse.json(
        { error: 'Invalid team selection' },
        { status: 400 }
      );
    }

    // Validate product category
    if (!VALID_PRODUCTS.includes(productCategory.toUpperCase())) {
      return NextResponse.json(
        { error: 'Invalid product category' },
        { status: 400 }
      );
    }

    // Validate description length
    if (description.trim().length < 20) {
      return NextResponse.json(
        { error: 'Please provide a more detailed description (at least 20 characters)' },
        { status: 400 }
      );
    }

    if (description.trim().length > 2000) {
      return NextResponse.json(
        { error: 'Description is too long (maximum 2000 characters)' },
        { status: 400 }
      );
    }

    // Validate date
    const bookingDate = new Date(date);
    if (isNaN(bookingDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      );
    }

    // Check if weekday
    if (!isWeekday(bookingDate)) {
      return NextResponse.json(
        { error: 'Consultations are only available Monday through Friday' },
        { status: 400 }
      );
    }

    // Check if date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(bookingDate);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return NextResponse.json(
        { error: 'Cannot book past dates' },
        { status: 400 }
      );
    }

    // Check if date is too far in the future (max 60 days)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    if (selectedDate > maxDate) {
      return NextResponse.json(
        { error: 'Please select a date within the next 60 days' },
        { status: 400 }
      );
    }

    // Validate time slot
    if (!VALID_TIME_SLOTS.includes(startTime)) {
      return NextResponse.json(
        { error: 'Invalid time slot' },
        { status: 400 }
      );
    }

    // Calculate end time (30 minutes after start)
    const [startHour, startMinute] = startTime.split(':').map(Number);
    let endHour = startHour;
    let endMinute = startMinute + 30;
    if (endMinute >= 60) {
      endHour += 1;
      endMinute = 0;
    }
    const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;

    // =====================
    // Check for double booking
    // =====================
    
    const startOfDay = new Date(bookingDate);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(bookingDate);
    endOfDay.setHours(23, 59, 59, 999);

    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
        startTime: startTime,
        status: {
          in: ['PENDING', 'CONFIRMED'],
        },
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: 'This time slot is no longer available. Please select a different time.' },
        { status: 409 }
      );
    }

    // Check if same email already has a booking on this day
    const existingUserBooking = await prisma.booking.findFirst({
      where: {
        email: email.toLowerCase(),
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
        status: {
          in: ['PENDING', 'CONFIRMED'],
        },
      },
    });

    if (existingUserBooking) {
      return NextResponse.json(
        { error: 'You already have a booking scheduled for this day.' },
        { status: 409 }
      );
    }

    // =====================
    // Create Booking
    // =====================

    const booking = await prisma.booking.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        phoneNumber: phoneValidation.formatted!,
        companyDomain: emailValidation.domain!,
        team: team.toUpperCase() as 'MARKETING' | 'SALES' | 'PRODUCT',
        productCategory: productCategory.toUpperCase() as 'EHP' | 'OIMS' | 'PAYNET' | 'CLICKCONNECT' | 'BLOK' | 'GENERAL',
        description: description.trim(),
        date: selectedDate,
        startTime,
        endTime,
        timezone,
        status: 'CONFIRMED',
      },
    });

    // =====================
    // Send Emails
    // =====================

    const emailData = {
      firstName: booking.firstName,
      lastName: booking.lastName,
      email: booking.email,
      phoneNumber: booking.phoneNumber,
      companyDomain: booking.companyDomain,
      team: booking.team,
      productCategory: booking.productCategory,
      description: booking.description,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      timezone: booking.timezone,
      bookingId: booking.id,
    };

    // Send emails asynchronously (don't block the response)
    sendBookingEmails(emailData)
      .then(result => {
        if (!result.visitorEmail.success) {
          console.error('Failed to send visitor email:', result.visitorEmail.error);
        }
        if (!result.teamEmail.success) {
          console.error('Failed to send team email:', result.teamEmail.error);
        }
      })
      .catch(error => {
        console.error('Email sending error:', error);
      });

    // =====================
    // Return Success
    // =====================

    return NextResponse.json({
      success: true,
      message: 'Consultation booked successfully',
      booking: {
        id: booking.id,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        timezone: booking.timezone,
        team: booking.team,
        status: booking.status,
      },
    }, { status: 201 });

  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/bookings
 * 
 * Get booking by ID (for confirmation page)
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        team: true,
        productCategory: true,
        date: true,
        startTime: true,
        endTime: true,
        timezone: true,
        status: true,
        createdAt: true,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ booking });

  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking' },
      { status: 500 }
    );
  }
}
