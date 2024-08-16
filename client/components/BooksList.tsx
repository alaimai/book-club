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
      <div>
        {books.map((book) => (
          <div>
            <h3>
              <Link to={`/books/${book.id}`}><b>{book.title}</b></Link>
            </h3>
            <h4>Author: {book.author}</h4>
            <p>Description: <i>{book.description}</i></p>
          </div>
        ))}
      </div>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>

    </>
  )
}
