import { getAllContacts } from '@/lib/db'

export const metadata = {
  title: 'Contact Submissions | Admin',
}

export default function AdminContactsPage({ searchParams }) {
  const pass = searchParams?.pw
  const ADMIN_PW = process.env.ADMIN_PASSWORD || 'sericaway'

  if (pass !== ADMIN_PW) {
    return (
      <div className="min-h-screen bg-[#090909] flex items-center justify-center px-4">
        <div className="bg-[#111111] border border-[#27272A] rounded-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-lg font-semibold text-white mb-4">Admin Access</h1>
          <p className="text-sm text-[#A1A1AA] mb-6">
            Add <code className="text-accent">?pw=yourpassword</code> to the URL to view submissions.
          </p>
          <p className="text-xs text-[#52525B]">
            Set <code className="text-accent">ADMIN_PASSWORD</code> in your .env file.
          </p>
        </div>
      </div>
    )
  }

  const contacts = getAllContacts()

  return (
    <div className="min-h-screen bg-[#090909] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-white">Contact Submissions</h1>
          <span className="text-sm text-[#52525B]">{contacts.length} total</span>
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
