import connection from './connection.ts'
import { Book } from '../../models/book.ts'

const db = connection

export async function getAllBooks() {
  const books = await db('books').select()
  return books as Book[]
}

export async function getBookById(id: number | string) {
  const book = await db('books').select().where({ id }).first()
  return book as Book
}

export async function addBook(data: Book) {
  const [id] = await db('books').insert(data)
  return id
}
