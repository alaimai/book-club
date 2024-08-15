import connection from './connection.ts'
import { Book } from '../../models/book.ts'

const db = connection

export async function getAllBooks() {
  const book = await db('books').select()
  return book as Book[]
}

export async function getBookById(id: number | string) {
  const book = await db('books').select().first().where({ id })
  return book as Book
}

export async function addBook(data: Book) {
  const [id] = await db('books').insert(data)
  return id
}
