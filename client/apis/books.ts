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

export async function getBookById(id: number): Promise<Book> {
  try {
    const res = await request.get(rootUrl + `/books/${id}`)
    return res.body as Book
  } catch (error) {
    console.error('Failed to fetch book', error)
    throw new Error('Unable to fetch book')
  }
}
export async function addBook(data: Book) {
  try {
    const res = await request.post(rootUrl + '/books/add').send(data)
    return res.body
  } catch (error) {
    console.error('Failed to add new book', error)
    throw new Error('Unable to add books')
  }
}

export async function updateReview(id: number, review: string) {
  try {
    const res = await request.patch(rootUrl + `/books/${id}`).send({ review })
    return res.body as Book
  } catch (error) {
    throw new Error('Unable to add review')
  }
}
