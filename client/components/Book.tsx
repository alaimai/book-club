import { Link } from "react-router-dom"
interface Props {
  id?: number
  title: string
  description: string
  author: string
  review: string
  cover_image: string
}

// To modify once hook is created

export default function Book({ id, title, author, description, review, cover_image }: Props) {
  return (
    <>
      <h2>Book details:</h2>
      <div>
        <h3>
          <Link to={`/books/${id}`}>{title}</Link>
        </h3>
        <img src={cover_image} alt={title} />
        <h4>{author}</h4>
        <p>{description}</p>
        <div>
          <h4>Review:</h4>
          {review ? (
            <p>{review}</p>
          ) : (
            <p>You haven't reviewed this book yet...</p>
          )}
        </div>
        {review === null && (
          <button>Add Review</button>
        )}
      </div>

    </>
  )
}