import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as Record<string, string>;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Toate câmpurile sunt obligatorii.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Adresa de email nu este validă.' }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: 'Mesajul este prea lung.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc;">
  <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0;">
    <div style="border-bottom: 3px solid #0d9488; padding-bottom: 16px; margin-bottom: 24px;">
      <h1 style="margin: 0; color: #0f172a; font-size: 22px;">
        📩 Mesaj nou — CST Systems
      </h1>
    </div>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px; vertical-align: top;">Nume:</td>
        <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Email:</td>
        <td style="padding: 8px 0;">
          <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Subiect:</td>
        <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${subject}</td>
      </tr>
    </table>

    <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #0d9488;">
      <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Mesaj</p>
      <p style="margin: 0; color: #1e293b; line-height: 1.7; white-space: pre-wrap;">${message}</p>
    </div>

    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}"
         style="display: inline-block; padding: 10px 20px; background: #0d9488; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
        Răspunde la email
      </a>
    </div>

    <p style="margin-top: 24px; color: #94a3b8; font-size: 12px; text-align: center;">
      Mesaj primit prin formularul de contact de pe <strong>cst-systems.ro</strong>
    </p>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"CST Systems Contact" <${process.env.SMTP_USER}>`,
      to: 'hello@cst-systems.ro',
      replyTo: `"${name}" <${email}>`,
      subject: `[CST Systems] ${subject}`,
      html: htmlBody,
      text: `Nume: ${name}\nEmail: ${email}\nSubiect: ${subject}\n\nMesaj:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact API] error:', err);
    return NextResponse.json(
      { error: 'Eroare la trimiterea emailului. Te rugăm să ne contactezi direct la hello@cst-systems.ro' },
      { status: 500 }
    );
  }
}
