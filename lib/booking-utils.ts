/**
 * Booking Utilities
 * 
 * Contains helper functions for:
 * - Email validation (corporate only)
 * - Phone validation
 * - Timezone handling
 * - Time slot generation
 * - ICS calendar file generation
 */

// =====================
// Public Email Domains (Blocked)
// =====================
const PUBLIC_EMAIL_DOMAINS = [
  // Google
  'gmail.com', 'googlemail.com',
  // Microsoft
  'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
  // Yahoo
  'yahoo.com', 'yahoo.co.uk', 'yahoo.co.in', 'ymail.com', 'rocketmail.com',
  // Apple
  'icloud.com', 'me.com', 'mac.com',
  // AOL
  'aol.com', 'aim.com',
  // ProtonMail
  'protonmail.com', 'proton.me', 'pm.me',
  // Others
  'mail.com', 'email.com', 'zoho.com', 'yandex.com', 'gmx.com', 'gmx.net',
  'inbox.com', 'fastmail.com', 'tutanota.com', 'mailinator.com',
  'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  // India specific
  'rediffmail.com', 'sify.com',
  // Regional
  'qq.com', '163.com', '126.com', 'sina.com', 'naver.com', 'daum.net',
];

// =====================
// Email Validation
// =====================

export interface EmailValidationResult {
  valid: boolean;
  error?: string;
  domain?: string;
}

/**
 * Validate email and ensure it's a corporate email (not public)
 */
export function validateCorporateEmail(email: string): EmailValidationResult {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  // Extract domain
  const domain = email.split('@')[1].toLowerCase();

  // Check against public domains
  if (PUBLIC_EMAIL_DOMAINS.includes(domain)) {
    return { 
      valid: false, 
      error: 'Please use your official company email address (personal emails like Gmail, Yahoo, Outlook are not accepted)',
      domain 
    };
  }

  // Check for suspicious patterns
  if (domain.includes('temp') || domain.includes('disposable') || domain.includes('fake')) {
    return { 
      valid: false, 
      error: 'Please use a valid corporate email address',
      domain 
    };
  }

  return { valid: true, domain };
}

// =====================
// Phone Validation
// =====================

export interface PhoneValidationResult {
  valid: boolean;
  error?: string;
  formatted?: string;
}

/**
 * Validate phone number with country code
 * Expects format: +[country code][number] e.g., +1234567890
 */
export function validatePhoneNumber(phone: string): PhoneValidationResult {
  // Remove spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');

  // Must start with +
  if (!cleaned.startsWith('+')) {
    return { 
      valid: false, 
      error: 'Please include country code (e.g., +1 for US, +91 for India)' 
    };
  }

  // Check length (minimum 8 digits + country code, maximum 15)
  if (cleaned.length < 9 || cleaned.length > 16) {
    return { 
      valid: false, 
      error: 'Please enter a valid phone number with country code' 
    };
  }

  // Check if rest are digits
  if (!/^\+\d+$/.test(cleaned)) {
    return { 
      valid: false, 
      error: 'Phone number should only contain digits after the country code' 
    };
  }

  return { valid: true, formatted: cleaned };
}

// =====================
// Timezone Utilities
// =====================

/**
 * Get user's timezone from browser
 */
export function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return 'America/New_York'; // Default to EST
  }
}

/**
 * Common timezones for dropdown
 */
export const TIMEZONES = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Central European (CET)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Asia/Tokyo', label: 'Japan (JST)' },
  { value: 'Asia/Shanghai', label: 'China (CST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST)' },
];

/**
 * Format date for display in specific timezone
 */
export function formatDateInTimezone(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format time for display in specific timezone
 */
export function formatTimeInTimezone(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

// =====================
// Time Slot Generation
// =====================

export interface TimeSlot {
  startTime: string;  // "09:00"
  endTime: string;    // "09:30"
  display: string;    // "9:00 AM - 9:30 AM"
  available: boolean;
}

/**
 * Generate 30-minute time slots from 9 AM to 6 PM
 */
export function generateTimeSlots(): Omit<TimeSlot, 'available'>[] {
  const slots: Omit<TimeSlot, 'available'>[] = [];
  
  // 9:00 AM to 5:30 PM (last slot ends at 6:00 PM)
  for (let hour = 9; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Skip 5:30 PM slot (would end at 6:30 PM)
      if (hour === 17 && minute === 30) continue;
      
      const startHour = hour.toString().padStart(2, '0');
      const startMinute = minute.toString().padStart(2, '0');
      const startTime = `${startHour}:${startMinute}`;
      
      // Calculate end time (30 minutes later)
      let endHour = hour;
      let endMinute = minute + 30;
      if (endMinute >= 60) {
        endHour += 1;
        endMinute = 0;
      }
      const endHourStr = endHour.toString().padStart(2, '0');
      const endMinuteStr = endMinute.toString().padStart(2, '0');
      const endTime = `${endHourStr}:${endMinuteStr}`;
      
      // Format display time
      const displayStart = formatTime12Hour(hour, minute);
      const displayEnd = formatTime12Hour(endHour, endMinute);
      
      slots.push({
        startTime,
        endTime,
        display: `${displayStart} - ${displayEnd}`,
      });
    }
  }
  
  return slots;
}

/**
 * Format time in 12-hour format
 */
function formatTime12Hour(hour: number, minute: number): string {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const displayMinute = minute.toString().padStart(2, '0');
  return `${displayHour}:${displayMinute} ${period}`;
}

/**
 * Check if a date is a weekday (Mon-Fri)
 */
export function isWeekday(date: Date): boolean {
  const day = date.getDay();
  return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
}

/**
 * Get next available weekday
 */
export function getNextWeekday(date: Date): Date {
  const result = new Date(date);
  while (!isWeekday(result)) {
    result.setDate(result.getDate() + 1);
  }
  return result;
}

// =====================
// ICS Calendar File Generation
// =====================

export interface ICSEventData {
  title: string;
  description: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  organizer: { name: string; email: string };
  attendee: { name: string; email: string };
}

/**
 * Generate ICS calendar file content
 */
export function generateICSFile(event: ICSEventData): string {
  const formatICSDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  const uid = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}@omniverity.com`;
  const now = formatICSDate(new Date());
  const start = formatICSDate(event.startDate);
  const end = formatICSDate(event.endDate);

  // Escape special characters in description
  const escapeICS = (str: string): string => {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Omniverity//Consultation Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeICS(event.title)}`,
    `DESCRIPTION:${escapeICS(event.description)}`,
    event.location ? `LOCATION:${escapeICS(event.location)}` : '',
    `ORGANIZER;CN=${event.organizer.name}:mailto:${event.organizer.email}`,
    `ATTENDEE;CN=${event.attendee.name};RSVP=TRUE:mailto:${event.attendee.email}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Omniverity Consultation in 30 minutes',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean).join('\r\n');

  return icsContent;
}

// =====================
// Team Configuration
// =====================

export const TEAMS = [
  { 
    value: 'MARKETING', 
    label: 'Marketing Team',
    email: 'marketing@omniverity.com',
    description: 'Brand partnerships, media inquiries, marketing collaborations'
  },
  { 
    value: 'SALES', 
    label: 'Sales Team',
    email: 'sales@omniverity.com',
    description: 'Pricing, licensing, enterprise deals, demos'
  },
  { 
    value: 'PRODUCT', 
    label: 'Product Executive',
    email: 'products@omniverity.com',
    description: 'Product features, roadmap, technical capabilities, integrations'
  },
];

export const PRODUCT_CATEGORIES = [
  { value: 'EHP', label: 'eHP - Enterprise Health Platform' },
  { value: 'OIMS', label: 'OIMS - Incident Management System' },
  { value: 'PAYNET', label: 'PayNet - Payment Network' },
  { value: 'CLICKCONNECT', label: 'ClickConnect - Customer Suite' },
  { value: 'BLOK', label: 'BloK - Blockchain Kit' },
  { value: 'GENERAL', label: 'General Inquiry' },
];

/**
 * Get team email by team type
 */
export function getTeamEmail(teamType: string): string {
  const team = TEAMS.find(t => t.value === teamType);
  return team?.email || 'info@omniverity.com';
}

/**
 * Get team label by team type
 */
export function getTeamLabel(teamType: string): string {
  const team = TEAMS.find(t => t.value === teamType);
  return team?.label || 'Team';
}

/**
 * Get product label by category
 */
export function getProductLabel(category: string): string {
  const product = PRODUCT_CATEGORIES.find(p => p.value === category);
  return product?.label || category;
}
