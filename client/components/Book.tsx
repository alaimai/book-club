import { Link } from "react-router-dom"
interface Props {
  title: string
  author: string
  description: string
  reviews: string[]
}

export default function Book({ title, author, description }: Props) {
  return (
    <>
      <h2>Book details:</h2>
      <div>
        <h3>
          <Link to={`/books/${id}`}>{title}</Link>
        </h3>
        <h4>{author}</h4>
        <p>{description}</p>
        <div>
          <h4>Reviews:</h4>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, i) => (
                <li key={i}>{review}</li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
        <button>Add a review</button>
      </div>

    </>
  )
}