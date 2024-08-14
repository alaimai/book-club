interface Props {
  title: string
  author: string
  description: string
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
        <button>Review this book</button>
      </div>

    </>
  )
}