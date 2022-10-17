import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext();

export function StoreContextProvider(props) {

    const [books, setBooks] = useState(JSON.parse(window.localStorage.getItem("books")) || []);

    const createBook = (book) => {
        const temp = [...books] || [];
        temp.unshift(book);

        window.localStorage.setItem('books', JSON.stringify(temp))
        setBooks(temp);

        console.log("BOOK UPLOADED")
    }

    const getBook = (id) => {
        const book = books.find(b => b.id === id);

        return book;
    }

    const updateBook = (book) => {
        const index = books.findIndex(i => i.id === book.id);
        const temp = [...books];
        
        temp[index] = { ... book };
        window.localStorage.setItem('books', JSON.stringify(temp))

        return;
    }

    return (
        <StoreContext.Provider 
            value={{
                books,
                createBook,
                getBook,
                updateBook
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
}