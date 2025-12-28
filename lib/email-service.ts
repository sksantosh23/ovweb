/**
 * Email Service for Booking Notifications
 * 
 * Uses Resend to send:
 * - Confirmation email to visitor
 * - Notification email to team
 * - Calendar invite attachment
 */

import { Resend } from 'resend';
import { 
  generateICSFile, 
  getTeamEmail, 
  getTeamLabel, 
  getProductLabel,
  formatDateInTimezone,
  ICSEventData 
} from './booking-utils';

// Initialize Resend (API key from environment)
const resend = new Resend(process.env.RESEND_API_KEY);

// Email sender address
const FROM_EMAIL = 'Omniverity <bookings@omniverity.com>';
// For development/testing, use Resend's test domain
const FROM_EMAIL_DEV = 'Omniverity <onboarding@resend.dev>';

export interface BookingEmailData {
  // Visitor info
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyDomain: string;
  
  // Meeting details
  team: string;
  productCategory: string;
  description: string;
  
  // Schedule
  date: Date;
  startTime: string;
  endTime: string;
  timezone: string;
  
  // Booking reference
  bookingId: string;
}

/**
 * Send confirmation email to the visitor
 */
export async function sendVisitorConfirmationEmail(data: BookingEmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const teamLabel = getTeamLabel(data.team);
    const productLabel = getProductLabel(data.productCategory);
    const formattedDate = formatDateInTimezone(data.date, data.timezone);
    
    // Generate ICS file
    const icsEvent: ICSEventData = {
      title: `Omniverity Consultation - ${teamLabel}`,
      description: `Consultation with ${teamLabel} regarding ${productLabel}.\n\nDescription: ${data.description}\n\nBooking Reference: ${data.bookingId}`,
      location: 'Virtual Meeting (link will be sent separately)',
      startDate: combineDateAndTime(data.date, data.startTime, data.timezone),
      endDate: combineDateAndTime(data.date, data.endTime, data.timezone),
      organizer: { name: teamLabel, email: getTeamEmail(data.team) },
      attendee: { name: `${data.firstName} ${data.lastName}`, email: data.email },
    };
    
    const icsContent = generateICSFile(icsEvent);
    const icsBase64 = Buffer.from(icsContent).toString('base64');

    const fromEmail = process.env.NODE_ENV === 'production' ? FROM_EMAIL : FROM_EMAIL_DEV;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: `✅ Consultation Confirmed - ${teamLabel} | Omniverity`,
      html: generateVisitorEmailHTML(data, formattedDate, teamLabel, productLabel),
      attachments: [
        {
          filename: 'omniverity-consultation.ics',
          content: icsBase64,
        },
      ],
    });

    if (error) {
      console.error('Failed to send visitor confirmation:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending visitor confirmation:', error);
    return { success: false, error: 'Failed to send confirmation email' };
  }
}

/**
 * Send notification email to the team
 */
export async function sendTeamNotificationEmail(data: BookingEmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const teamEmail = getTeamEmail(data.team);
    const teamLabel = getTeamLabel(data.team);
    const productLabel = getProductLabel(data.productCategory);
    const formattedDate = formatDateInTimezone(data.date, data.timezone);

    // Generate ICS file for team
    const icsEvent: ICSEventData = {
      title: `Consultation: ${data.firstName} ${data.lastName} (${data.companyDomain})`,
      description: `New consultation request:\n\nVisitor: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phoneNumber}\nCompany: ${data.companyDomain}\nProduct: ${productLabel}\n\nDescription:\n${data.description}\n\nBooking Reference: ${data.bookingId}`,
      location: 'Virtual Meeting',
      startDate: combineDateAndTime(data.date, data.startTime, data.timezone),
      endDate: combineDateAndTime(data.date, data.endTime, data.timezone),
      organizer: { name: teamLabel, email: teamEmail },
      attendee: { name: `${data.firstName} ${data.lastName}`, email: data.email },
    };

    const icsContent = generateICSFile(icsEvent);
    const icsBase64 = Buffer.from(icsContent).toString('base64');

    const fromEmail = process.env.NODE_ENV === 'production' ? FROM_EMAIL : FROM_EMAIL_DEV;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: teamEmail,
      subject: `📅 New Consultation Request - ${data.firstName} ${data.lastName} | ${data.companyDomain}`,
      html: generateTeamEmailHTML(data, formattedDate, teamLabel, productLabel),
      attachments: [
        {
          filename: 'consultation-invite.ics',
          content: icsBase64,
        },
      ],
    });

    if (error) {
      console.error('Failed to send team notification:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending team notification:', error);
    return { success: false, error: 'Failed to send team notification' };
  }
}

/**
 * Send both emails
 */
export async function sendBookingEmails(data: BookingEmailData): Promise<{ 
  visitorEmail: { success: boolean; error?: string };
  teamEmail: { success: boolean; error?: string };
}> {
  const [visitorResult, teamResult] = await Promise.all([
    sendVisitorConfirmationEmail(data),
    sendTeamNotificationEmail(data),
  ]);

  return {
    visitorEmail: visitorResult,
    teamEmail: teamResult,
  };
}

// =====================
// Email HTML Templates
// =====================

function generateVisitorEmailHTML(
  data: BookingEmailData, 
  formattedDate: string,
  teamLabel: string,
  productLabel: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1e293b; border-radius: 16px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                ✅ Consultation Confirmed
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Your meeting with Omniverity has been scheduled
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Hello <strong>${data.firstName}</strong>,
              </p>
              <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
                Thank you for scheduling a consultation with us. We're looking forward to discussing your needs.
              </p>
              
              <!-- Meeting Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 12px; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="color: #06b6d4; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px 0;">
                      Meeting Details
                    </h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 14px;">Date</span><br>
                          <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">${formattedDate}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 14px;">Time</span><br>
                          <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">${formatTime(data.startTime)} - ${formatTime(data.endTime)} (${data.timezone})</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 14px;">Team</span><br>
                          <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">${teamLabel}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 14px;">Topic</span><br>
                          <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">${productLabel}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 14px;">Duration</span><br>
                          <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">30 minutes</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Booking Reference -->
              <p style="color: #64748b; font-size: 14px; margin: 0 0 32px 0;">
                <strong>Booking Reference:</strong> ${data.bookingId}
              </p>
              
              <!-- Calendar Note -->
              <div style="background-color: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 32px;">
                <p style="color: #06b6d4; font-size: 14px; margin: 0;">
                  📎 We've attached a calendar invite (.ics file) to this email. Simply open it to add the meeting to your calendar.
                </p>
              </div>
              
              <!-- What's Next -->
              <h3 style="color: #e2e8f0; font-size: 16px; margin: 0 0 12px 0;">What's Next?</h3>
              <ul style="color: #94a3b8; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0 0 32px 0;">
                <li>Add the meeting to your calendar using the attached invite</li>
                <li>You'll receive a meeting link before the scheduled time</li>
                <li>Prepare any questions or materials you'd like to discuss</li>
              </ul>
              
              <!-- Need to Reschedule -->
              <p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin: 0;">
                Need to reschedule or cancel? Reply to this email and we'll help you find a new time.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 40px; text-align: center; border-top: 1px solid #334155;">
              <p style="color: #64748b; font-size: 12px; margin: 0 0 8px 0;">
                © 2025 Omniverity. All rights reserved.
              </p>
              <p style="color: #475569; font-size: 12px; margin: 0;">
                <a href="https://omniverity.com" style="color: #06b6d4; text-decoration: none;">omniverity.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function generateTeamEmailHTML(
  data: BookingEmailData,
  formattedDate: string,
  teamLabel: string,
  productLabel: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1e293b; border-radius: 16px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #06b6d4 0%, #6366f1 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                📅 New Consultation Request
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                ${teamLabel} - Incoming booking
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Visitor Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="color: #10b981; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px 0;">
                      👤 Visitor Information
                    </h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Name:</span>
                          <span style="color: #f1f5f9; font-size: 15px; margin-left: 8px;">${data.firstName} ${data.lastName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Email:</span>
                          <a href="mailto:${data.email}" style="color: #06b6d4; font-size: 15px; margin-left: 8px; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Phone:</span>
                          <a href="tel:${data.phoneNumber}" style="color: #06b6d4; font-size: 15px; margin-left: 8px; text-decoration: none;">${data.phoneNumber}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Company:</span>
                          <span style="color: #f1f5f9; font-size: 15px; margin-left: 8px;">${data.companyDomain}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Meeting Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="color: #8b5cf6; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px 0;">
                      📅 Meeting Details
                    </h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Date:</span>
                          <span style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-left: 8px;">${formattedDate}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Time:</span>
                          <span style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-left: 8px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)} (${data.timezone})</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Product:</span>
                          <span style="color: #f1f5f9; font-size: 15px; margin-left: 8px;">${productLabel}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #64748b; font-size: 13px;">Reference:</span>
                          <span style="color: #f1f5f9; font-size: 15px; font-family: monospace; margin-left: 8px;">${data.bookingId}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Description Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="color: #f59e0b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">
                      📝 Inquiry Description
                    </h2>
                    <p style="color: #e2e8f0; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.description}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Calendar Note -->
              <div style="background-color: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 16px; border-radius: 0 8px 8px 0;">
                <p style="color: #10b981; font-size: 14px; margin: 0;">
                  📎 Calendar invite attached. Open the .ics file to add this meeting to your calendar.
                </p>
              </div>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 40px; text-align: center; border-top: 1px solid #334155;">
              <p style="color: #475569; font-size: 12px; margin: 0;">
                Omniverity Booking System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// =====================
// Helper Functions
// =====================

function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

function combineDateAndTime(date: Date, time: string, timezone: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}
