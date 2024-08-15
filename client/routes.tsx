import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import BooksList from './components/BooksList.tsx'
import Book from './components/Book.tsx'
import AddBook from './components/AddBook.tsx'
import Layout from './components/Layout.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="books" element={<BooksList />} />
    <Route path="books/:id" element={<Book />} />
    <Route path="books/add-book" element={<AddBook />} />
  </Route>,
)

export default routes
