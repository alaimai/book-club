import { useBooks } from "../hooks/useBooks"
import { Link } from 'react-router-dom'


export default function BooksList() {
  const { data: books, isPending, isError } = useBooks()

  if (isError) {
    return <p>Error fetching list of books...</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h2>My books:</h2>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <Link to={`/books/${book.id}`}>
              <img src={book.cover_image} alt={book.title} className="books-cover" />
            </Link>
            <div className="book-info">
              <h3>
                <Link to={`/books/${book.id}`}><b>{book.title}</b></Link>
              </h3>
              <h4>by {book.author}</h4>
            </div>
          </div>
        ))}
      </div>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>
    </>
  )
}
