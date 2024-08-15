import { useState } from 'react'
import { Book } from '../../models/book'
import { useAddBook } from '../hooks/useBooks'

export function AddBook() {
  const { mutate: addBook, isPending, isSuccess, isError } = useAddBook()
  const [bookInfo, setBookInfo] = useState<Book>({
    title: '',
    description: '',
    review: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setBookInfo((prev) => ({ ...prev, [name]: value }))
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // if (
      //   bookInfo.title === '' ||
      //   bookInfo.description === '' ||
      //   bookInfo.review === ''
      // ) {
      //   return window.alert('* must not be empty')
      // }
      addBook(bookInfo)
      setBookInfo({ title: '', description: '', review: '' })
    }
  }

  return (
    <>
      {isError && <div>Failed to add book</div>}
      {isSuccess && <div>New Book has been added</div>}
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">* Title:</label>
        <input
          required
          id="title"
          type="text"
          name="title"
          value={bookInfo.title}
          onChange={handleChange}
        />
        <label htmlFor="description">* Description:</label>
        <input
          required
          id="description"
          type="text"
          name="description"
          value={bookInfo.description}
          onChange={handleChange}
        />
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={bookInfo.review}
          onChange={handleChange}
        />
        <div></div>
        <button>SUBMIT</button>
      </form>
    </>
  )
}
