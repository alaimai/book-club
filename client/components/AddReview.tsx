import { useState } from "react";
import { useAddReview } from "../hooks/useBooks";

interface Props {
  id: number
}

export default function AddReviewForm({ id }: Props) {
  const [review, setReview] = useState('')
  const { mutate } = useAddReview(id, review)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write a review here..." required />
      <button type="submit">Submit Review</button>
    </form>
  )
}