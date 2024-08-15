import BooksList from './BooksList.tsx'

function App() {

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Book Club
        </h1>
        <section className="main">
          <BooksList />
        </section>
      </div>
    </>
  )
}

export default App
