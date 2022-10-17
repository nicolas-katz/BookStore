import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { StoreContext } from '../context/StoreContext';

function View() {
  const [book, setBook] = useState({})
  const params = useParams();
  const { getBook } = useContext(StoreContext);

  useEffect(()=> {
    const bookId = getBook(params.bookId);
    setBook(bookId);
  }, []);

  return (
    <Layout>
      {
        !book ? <h1>Not founded book</h1> : 
        <div className='ViewContainer'>
          <h1>{book?.title} ({book?.author})</h1>
          <img 
            src={book?.cover} 
            alt={book?.title} 
            width="200"
          />
        </div>
      }
    </Layout>
  )
}

export default View