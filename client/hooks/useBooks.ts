import {
  useQuery,
  useMutation,
  useQueryClient,
  
} from '@tanstack/react-query'
import { addBook, getAllBooks } from '../apis/books.ts'
import { Book } from '../../models/book.ts'

export function useBooks() {
  return useQuery({ queryKey: ['books'], queryFn: getAllBooks })
}

export function useAddBook() {
  const queryClient = useQueryClient()
 return useMutation({
    mutationFn:(data:Book)=> addBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })

 
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
