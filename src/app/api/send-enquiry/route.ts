// app/api/contact/route.ts

export const runtime = 'nodejs'; // ✅ Fix: Force Node.js runtime

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, subject, email, phone, message } = await request.json();

    if (!fullName || !subject || !email || !phone || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `[Contact Us] ${subject}`,
      html: `
        <h2>New Contact Us Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>This message was submitted through your website’s Contact Us form.</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}