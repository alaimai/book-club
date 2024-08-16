import { Link, useParams } from 'react-router-dom'
import { useBooksById } from '../hooks/useBooks'
import { useState } from 'react'
import AddReviewForm from './AddReview'

export default function Book() {
  const { id } = useParams()
  const bookId = Number(id)

  const { data: book, isLoading, isError } = useBooksById(bookId)
  const [isAddingReview, setIsAddingReview] = useState(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching book details...</div>
  }
  if (isNaN(bookId)) {
    return <div>Invalid book id</div>
  }

  const handleAddReviewClick = () => {
    setIsAddingReview(true)
  }

  if (book) {
    return (
      <>
        <h2>{book.title}</h2>
        <div className='books-container'>
          <div className="book-item">
            <img src={book.cover_image} alt={book.title} className="books-cover" />
            <div className="book-info">
              <h4>Author: </h4><p>{book.author}</p>
              <h4>Description: </h4><p>{book.description}</p>
              <div>
                <h4>Review:</h4>
                {book.review ? (
                  <p>{book.review}</p>
                ) : (
                  <>
                    <p>You haven&apos;t reviewed this book yet...</p>
                    {isAddingReview ? (
                      <AddReviewForm id={bookId} />
                    ) : (
                      <button onClick={handleAddReviewClick}>Add Review</button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Link to="/books">
          <button>My Books</button>
        </Link>
      </>
    )
  }
}
