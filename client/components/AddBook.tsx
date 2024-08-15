import { useState } from 'react'
import { Book } from '../../models/book'
import { useAddBook } from '../hooks/useBooks'
import { validateLink } from './testImageUrl'

export default function AddBook() {
  const { mutate: addBook, isPending, isSuccess, isError } = useAddBook()
  const [inValidLink,setInValidLink] =useState('')
  const bookDetails ={
    title: '',
    description: '',
    author:'',
    review: '',
    cover_image:''
  }
  const [bookInfo, setBookInfo] = useState<Book>(bookDetails)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setBookInfo((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isUrl = validateLink(bookInfo.cover_image)
    if(!isUrl){
      setInValidLink('Invalid HTML link!')
    }
    // if (
    //   bookInfo.title === '' ||
    //   bookInfo.description === '' ||
    //   bookInfo.review === ''
    // ) {
    //   return window.alert('* must not be empty')
    //}
    setInValidLink('')
    addBook(bookInfo)
    setBookInfo(bookDetails)
    
  }

  return (
    <>
      {<div>{inValidLink}</div>}
      {isError && <div>Failed to add book</div>}
      {isSuccess && <div>New Book has been added</div>}
      {isPending && <div>Processing....</div>}
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
        <label htmlFor="author">* Author:</label>
        <input
          required
          id="author"
          type="text"
          name="author"
          value={bookInfo.author}
          onChange={handleChange}
        />
         <label htmlFor="cover_image">* Cover:</label>
        <input
          required
          id="cover_image"
          type="text"
          name="cover_image"
          value={bookInfo.cover_image}
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
        <button>Submit</button>
      </form>
    </>
  )
}
