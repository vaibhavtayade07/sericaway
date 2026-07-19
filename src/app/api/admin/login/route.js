import { cookies } from 'next/headers'
import crypto from 'crypto'

function signToken(password) {
  const secret = process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || 'sericaway'
  return crypto.createHmac('sha256', secret).update(password).digest('hex')
}

export async function POST(request) {
  const { password } = await request.json()
  const adminPw = process.env.ADMIN_PASSWORD || 'sericaway'

  if (password !== adminPw) {
    return Response.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = signToken(password)
  const cookieStore = await cookies()
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 4,
  })

  return Response.json({ success: true })
}
