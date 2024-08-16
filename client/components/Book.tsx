import { Link, useParams } from 'react-router-dom'
import { useBooksById } from '../hooks/useBooks'

export default function Book() {
  const { id } = useParams()
  const bookId = Number(id)

  if (isNaN(bookId)) {
    return <div>Invalid book id</div>
  }
  const { data: book } = useBooksById(bookId)
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
                    <p>You haven't reviewed this book yet...</p>
                    <button>Add Review</button>
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
