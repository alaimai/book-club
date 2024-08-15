import db from './connection.ts'
import { Book } from '../../models/book.ts'

export async function getAllBooks() {
  const book = await db('book').select()
  return book as Book[]
}

export async function getBookById(id: number | string) {
  const book = await db('book').select().first().where({ id })
  return book as Book
}

export async function addBook(data: Book) {
  const [id] = await db('book').insert(data)
  return id
}
