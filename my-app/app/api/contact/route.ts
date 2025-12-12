import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { nombre, email, empresa, mensaje } = await req.json();

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT);
    const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

    if (!SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: 'SMTP no configurado' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    const subject = `Nuevo contacto web de ${nombre}`;
    const text = `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa}\n\nMensaje:\n${mensaje}`;

    const info = await transporter.sendMail({
      from: SMTP_USER,
      to: RECEIVER_EMAIL,
      subject,
      text,
    });

    console.log('Email sent:', info.messageId || info);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error en /api/contact (SMTP):', err);
    return NextResponse.json({ error: 'Error del servidor', details: String(err) }, { status: 500 });
  }
}
