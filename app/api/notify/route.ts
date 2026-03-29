import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { type, data } = body // type: 'booking' | 'contact', data: form fields

  try {
    const subject = type === 'booking'
      ? `New Safari Booking — ${data.name} (${data.destination})`
      : `New Contact Message — ${data.name}`

    const html = type === 'booking' ? `
      <h2>New Booking Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Destination:</strong> ${data.destination}</p>
      <p><strong>Travel Date:</strong> ${data.travel_date || 'Not specified'}</p>
      <p><strong>Guests:</strong> ${data.guests}</p>
      <p><strong>Message:</strong> ${data.message || 'None'}</p>
    ` : `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${data.subject || 'General'}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `

    await resend.emails.send({
      from: 'À Bientôt Admin <onboarding@resend.dev>',
      to: 'abientottours2023@gmail.com',
      subject,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Email notification failed:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
