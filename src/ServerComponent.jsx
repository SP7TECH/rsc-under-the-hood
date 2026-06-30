import {AsyncDatabase} from "promised-sqlite3"
import path from "node:path"

// this page assumes that you are logged in as user 1, no auth here 
export default function MyNotes() {
  console.log("rendering MyNotes Server Component");

  async function fetchNotes() {
    console.log('running fetchNotes server function');
    const dbPath = path.join(__dirname, "../notes.db")
    const db = await AsyncDatabase.open(dbPath)
    const from = await db.all(
      "SELECT n.id as id, n.note as note, f.name as from_user, t.name as to_user FROM notes n JOIN users f ON f.id = n.from_user JOIN users t ON t.id = n.to_user WHERE from_user = ?",
      ["1"]
    );
    return {
      from,
    };
  }

  const notes = await fetchNotes()
  
}