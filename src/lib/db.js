import { getCloudflareContext } from '@opennextjs/cloudflare'

async function getDb() {
  const { env } = getCloudflareContext()
  return env.DB
}

export async function saveContact({ name, email, company, message }) {
  const db = await getDb()
  await db
    .prepare('INSERT INTO contact_submissions (name, email, company, message) VALUES (?, ?, ?, ?)')
    .bind(name, email, company, message)
    .run()
}

export async function getAllContacts() {
  const db = await getDb()
  const { results } = await db
    .prepare('SELECT * FROM contact_submissions ORDER BY created_at DESC')
    .all()
  return results
}
