import { Router } from 'express'
import * as db from '../db/books'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    res.json(books)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})
router.post('/add', async (req, res) => {
  const book = req.body
  try {
    await db.addBook(book)
    res.status(200).json({ message: 'Book has beed added' })
  } catch (error) {
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

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { review } = req.body
    const reviewAdded = await db.addReview(Number(id), review)
    res.json(reviewAdded)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
