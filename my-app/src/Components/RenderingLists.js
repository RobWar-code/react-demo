import React from 'react'
import Book from './Book.js'

function RenderingLists() {
  const bookList = [
    {
      title: "To kill a mocking bird",
      author: "Harper Lee",
      pages: 243
    },
    {
      title: "The great gatsby",
      author: "F. Scott Fitzgerald",
      pages: 218
    },
    {
      title: "The catcher in the rye",
      author: "J. D. Salinger",
      pages: 210
    }
  ];

  const books = [
    "To kill a mocking bird",
    "The great gatsby",
    "The catcher in the rye"
  ]
  return (
    <div>
        {books.map(book => {
          return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {bookList.map(book => {
          return (
            <Book key={book.title} book={book}/>
          )
        })}
    </div>
  )
}

export default RenderingLists