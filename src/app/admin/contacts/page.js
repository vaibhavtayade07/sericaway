import { cookies } from 'next/headers'
import crypto from 'crypto'
import { redirect } from 'next/navigation'
import { getAllContacts } from '@/lib/db'

export const metadata = {
  title: 'Contact Submissions | Admin',
}

function verifySession(token) {
  const adminPw = process.env.ADMIN_PASSWORD || 'sericaway'
  const secret = process.env.SESSION_SECRET || adminPw
  const expected = crypto.createHmac('sha256', secret).update(adminPw).digest('hex')
  return token === expected
}

export default async function AdminContactsPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (!session || !verifySession(session.value)) {
    redirect('/admin')
  }

  const contacts = getAllContacts()

  return (
    <div className="min-h-screen bg-[#090909] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-white">Contact Submissions</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#52525B]">{contacts.length} total</span>
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="text-xs text-[#52525B] hover:text-white transition-colors underline"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>

        {contacts.length === 0 ? (
          <div className="bg-[#111111] border border-[#27272A] rounded-2xl p-12 text-center">
            <p className="text-[#A1A1AA] text-sm">No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="bg-[#111111] border border-[#27272A] rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-sm font-medium text-white">{c.name}</span>
                    <span className="text-xs text-[#52525B] ml-3">{c.email}</span>
                    {c.company && (
                      <span className="text-xs text-[#52525B] ml-3">{c.company}</span>
                    )}
                  </div>
                  <span className="text-xs text-[#52525B] shrink-0 ml-4">{c.created_at}</span>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{c.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
