import { getAllContacts } from '../src/lib/db.js'

const contacts = getAllContacts()

if (contacts.length === 0) {
  console.log('No submissions yet.')
  process.exit(0)
}

console.log(`\n  Contact Submissions (${contacts.length})\n`)
console.log('  ' + '-'.repeat(72))

for (const c of contacts) {
  console.log(`  ID:        ${c.id}`)
  console.log(`  Name:      ${c.name}`)
  console.log(`  Email:     ${c.email}`)
  console.log(`  Company:   ${c.company || '—'}`)
  console.log(`  Message:   ${c.message}`)
  console.log(`  Date:      ${c.created_at}`)
  console.log('  ' + '-'.repeat(72))
}

console.log()
