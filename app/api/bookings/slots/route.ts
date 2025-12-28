import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateTimeSlots, isWeekday, TimeSlot } from '@/lib/booking-utils';

const prisma = new PrismaClient();

/**
 * GET /api/bookings/slots
 * 
 * Get available time slots for a specific date
 * 
 * Query params:
 * - date: ISO date string (required)
 * - timezone: Timezone string (optional, defaults to America/New_York)
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    const timezone = searchParams.get('timezone') || 'America/New_York';

    // Validate date parameter
    if (!dateParam) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Parse date
    const date = new Date(dateParam);
    if (isNaN(date.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      );
    }

    // Check if it's a weekday
    if (!isWeekday(date)) {
      return NextResponse.json(
        { 
          error: 'Selected date is not a business day',
          message: 'Consultations are only available Monday through Friday'
        },
        { status: 400 }
      );
    }

    // Check if date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return NextResponse.json(
        { 
          error: 'Cannot book past dates',
          message: 'Please select a future date'
        },
        { status: 400 }
      );
    }

    // Check if date is too far in the future (max 60 days)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    if (selectedDate > maxDate) {
      return NextResponse.json(
        { 
          error: 'Date too far in the future',
          message: 'Please select a date within the next 60 days'
        },
        { status: 400 }
      );
    }

    // Generate all possible time slots
    const allSlots = generateTimeSlots();

    // Get existing bookings for this date
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const existingBookings = await prisma.booking.findMany({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
        status: {
          in: ['PENDING', 'CONFIRMED'],
        },
      },
      select: {
        startTime: true,
      },
    });

    // Create a set of booked times for quick lookup
    const bookedTimes = new Set(existingBookings.map(b => b.startTime));

    // Check if today and filter out past time slots
    const isToday = selectedDate.getTime() === today.getTime();
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    // Mark slots as available or not
    const slotsWithAvailability: TimeSlot[] = allSlots.map(slot => {
      let available = !bookedTimes.has(slot.startTime);
      
      // If today, check if the slot time has already passed
      if (isToday && available) {
        const [slotHour, slotMinute] = slot.startTime.split(':').map(Number);
        // Add 1 hour buffer for same-day bookings
        if (slotHour < currentHour + 1 || (slotHour === currentHour + 1 && slotMinute <= currentMinute)) {
          available = false;
        }
      }
      
      return {
        ...slot,
        available,
      };
    });

    // Count available slots
    const availableCount = slotsWithAvailability.filter(s => s.available).length;

    return NextResponse.json({
      date: dateParam,
      timezone,
      totalSlots: slotsWithAvailability.length,
      availableSlots: availableCount,
      slots: slotsWithAvailability,
    });

  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
}
