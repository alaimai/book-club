import request from 'superagent'
import { Book } from '../../models/book'

const rootUrl = '/api/v1'

export async function getAllBooks(): Promise<Book[]> {
  try {
    const res = await request.get(rootUrl + '/books')
    return res.body as Book[]
  } catch (error) {
    console.error('Failed to fetch books', error)
    throw new Error('Unable to fetch books')
  }
}
// add a book

export async function addBook(data: Book) {
  try {
    const res = await request.post(rootUrl + '/books/add').send(data)
    return res.body
  } catch (error) {
    console.error('Failed to add new book', error)
    throw new Error('Unable to add books')
  }
}
