import { Router } from 'express'
import * as db from '../db/books'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()

    //res.json({ books: books.map((book) => book.title) })
    res.json(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const book = await db.getBookById(req.params.id)
    res.json(book)
  } catch (err) {
    next(err)
  }
})

export default router
