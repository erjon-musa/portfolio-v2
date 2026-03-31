import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true
  }

  entry.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, _honeypot } = body

    // Honeypot check — bots will fill this hidden field
    if (_honeypot) {
      // Silently accept but don't send (trick the bot)
      return NextResponse.json({ success: true })
    }

    // Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many messages. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate required fields
    if (!subject || !message) {
      return NextResponse.json(
        { error: 'Subject and message are required.' },
        { status: 400 }
      )
    }

    if (subject.length > 200) {
      return NextResponse.json(
        { error: 'Subject is too long.' },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters).' },
        { status: 400 }
      )
    }

    // Validate optional email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      )
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.log('Contact form submission (Resend not configured):', { name, email, subject, message })
      return NextResponse.json({
        success: true,
        note: 'Message received (email delivery not configured yet)',
      })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const senderInfo = [
      name ? `Name: ${name}` : 'Name: (not provided)',
      email ? `Email: ${email}` : 'Email: (not provided)',
    ].join('\n')

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'erjonmusa@outlook.com',
      subject: `[Portfolio] ${subject}`,
      text: `${senderInfo}\n\n---\n\n${message}`,
      replyTo: email || undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
