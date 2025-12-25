import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Log for demo - in production, send email or save to database
    console.log('Contact form submission:', data);
    
    return NextResponse.json({
      message: 'Message sent successfully',
      success: true
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
