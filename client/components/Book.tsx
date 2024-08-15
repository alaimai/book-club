import { Link, useParams } from 'react-router-dom'
import { useBooksById } from '../hooks/useBooks'
interface Props {
  id?: number
  title: string
  description: string
  author: string
  review: string
  cover_image: string
}

// To modify once hook is created

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
        <h2>Book details:</h2>
        <div>
          <h3>
            <Link to={`/books/${id}`}>{book.title}</Link>
          </h3>
          <img src={book.cover_image} alt={book.title} />
          <h4>{book.author}</h4>
          <p>{book.description}</p>
          <div>
            <h4>Review:</h4>
            {book.review ? (
              <p>{book.eview}</p>
            ) : (
              <p>You haven't reviewed this book yet...</p>
            )}
          </div>
          {book.review === null && <button>Add Review</button>}
        </div>
      </>
    )
  }
}
