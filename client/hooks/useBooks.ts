import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/books.ts'
import { Book } from '../../models/book.ts'

export function useBooks() {
  return useQuery({ queryKey: ['books'], queryFn: api.getAllBooks })
}

export function useBooksById(id: number) {
  return useQuery({
    queryKey: ['books', id],
    queryFn: () => api.getBookById(id),
  })
}
export function useAddBook() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Book) => api.addBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })
}
