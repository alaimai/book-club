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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBookInfo((prev) => ({ ...prev, [name]: value }))
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (
        bookInfo.title === '' ||
        bookInfo.description === '' ||
        bookInfo.review === ''
      ) {
        return window.alert('* must not be empty')
      }
      addBook(bookInfo)
      setBookInfo({ title: '', description: '', review: '' })
    }
  }
  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          * Title:
          <input
            type="text"
            name="title"
            value={bookInfo.title}
            onChange={handleChange}
          />
        </label>
        <label>
          * Description:
          <input
            type="text"
            name="description"
            value={bookInfo.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Review:
          <input
            type="text"
            name="review"
            value={bookInfo.review}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  )
}
