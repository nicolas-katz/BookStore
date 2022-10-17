import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Book.css'

function Book({book}) {
  return (
    <div className="BookContainer">
        <Link to={`/book/${book.id}`}>
            <img src={book.cover} alt={book.title} />
        </Link>
        <h3>{book.title} ({book.author})</h3>
    </div>
  )
}

export default Book