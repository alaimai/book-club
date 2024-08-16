import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Book Club</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
