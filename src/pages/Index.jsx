import React, { useContext } from 'react'
import Book from '../components/Book'
import Layout from '../components/Layout'
import { StoreContext } from '../context/StoreContext'

function Index() {
  const { books } = useContext(StoreContext)

  return (
    <Layout>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </Layout>
  )
}

export default Index