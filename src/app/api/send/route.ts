
import { Resend } from 'resend'
import * as React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import EmailTemplate from '@/components/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (request: NextRequest) {
  const { senderEmail, message } = await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['matheusursinoprofissional@gmail.com'],
      subject: 'Hello world',
      replyTo: senderEmail,
      react: EmailTemplate({
        message: message,
        senderEmail: senderEmail,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}