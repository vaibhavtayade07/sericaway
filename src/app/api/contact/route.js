import { saveContact } from '@/lib/db'

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    await saveContact({ name, email, company: company || '', message })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
