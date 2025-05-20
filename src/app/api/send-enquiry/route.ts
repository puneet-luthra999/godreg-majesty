import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: NextRequest) {

  try { 

    const { fullName, subject, email, phone, message } = await request.json();;

    if (!fullName || !subject || !email || !phone || !message) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `[Contact Form] ${subject}`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}
