// REACT IMPORTS
import React from 'react'
import ReactDOM from 'react-dom/client'

// OWN IMPORTS
import './index.css'
import { books } from './data'
import { Book } from './Book'

function App() {
  return (
    <>
    <h1>Best Sellers</h1>
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={'#' + (index + 1)}/>
      })}
    </section>
    </>
  )
}

///////////////////////      ROOT      /////////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
