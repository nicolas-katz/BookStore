import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Create from './pages/Create';
import View from './pages/View';

export default function App() {
  return (
      <>
        <Routes>
          <Route 
            path='https://nicolas-katz.github.io/BookStore/' 
            element={<Index />} />
          <Route 
            path='https://nicolas-katz.github.io/BookStore/create' 
            element={<Create />} />
          <Route 
            path='https://nicolas-katz.github.io/BookStore/book/:bookId' 
            element={<View />} />
        </Routes>  
      </>
  )
}