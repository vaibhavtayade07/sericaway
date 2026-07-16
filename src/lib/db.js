import Database from 'better-sqlite3'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'contacts.db')

let db

function getDb() {
  if (!db) {
    db = new Database(DB_PATH)
    db.pragma('journal_mode = WAL')
    db.exec(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT DEFAULT '',
        message TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `)
  }
  return db
}

export function saveContact({ name, email, company, message }) {
  const stmt = getDb().prepare(
    'INSERT INTO contact_submissions (name, email, company, message) VALUES (?, ?, ?, ?)'
  )
  return stmt.run(name, email, company, message)
}

export function getAllContacts() {
  return getDb().prepare(
    'SELECT * FROM contact_submissions ORDER BY created_at DESC'
  ).all()
}
