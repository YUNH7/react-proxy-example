import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import Footer from './components/Footer';
import { TestAPI } from './components/TestAPI';

function App() {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  
  const handleSubmit = () => {
    createBook(bookShelf)
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }
  useEffect(() => {
    getAllBook()
  }, [])

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === 'book') {
      bookShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      bookShelf.category = e.target.value;
    } else if (e.target.name === 'author') {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  }


  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <TestAPI />
        <CreateBook
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard
          numberOfBooks={numberOfBooks}
          getAllBook={getAllBook}
        />
        <BookTable books={books} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
