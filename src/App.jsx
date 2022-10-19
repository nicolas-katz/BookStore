import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Create from './pages/Create';
import View from './pages/View';

export default function App() {
  return (
        <Routes>
          <Route 
            path='/' 
            element={<Index />} />
          <Route 
            path='create' 
            element={<Create />} />
          <Route 
            path='book/:bookId' 
            element={<View />} />
        </Routes>  
  )
}