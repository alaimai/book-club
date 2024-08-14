import { useQuery } from "@tanstack/react-query"
import Book from "./Book"
// import function from apiClient 

export default function BooksList() {
  const { data: books, isPending, isError } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks() /* change accordinaly to apiClient function*/
  })

  if (isError) {
    return <p>Error fetching list of books...</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h2>List of books:</h2>
      {books.map((book) => {
        return <Book key={id} id={book.id} title={book.title} author={book.author} description={book.description} />
      })}

    </>
  )
}
