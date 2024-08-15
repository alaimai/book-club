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
      <h2>List of books:</h2>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h3>
            <h4>{book.author}</h4>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>

    </>
  )
}
