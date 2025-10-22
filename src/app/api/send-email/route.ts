import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple HTML escape function to prevent injection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Escape user inputs to prevent HTML injection
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your domain in production
      to: process.env.NEXT_PUBLIC_RESEND_DESTINATION_EMAIL!,
      subject: `${escapedName} : ${escapedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <hr />
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Subject:</strong> ${escapedSubject}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${escapedMessage.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}