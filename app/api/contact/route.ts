// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send the email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's testing email
      to: 'rishabhkartik2004@gmail.com', // Replace with YOUR actual email address
      subject: `New Portfolio Message from ${name}`,
      reply_to: email, // This allows you to hit "Reply" in your inbox and reply directly to the sender
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}