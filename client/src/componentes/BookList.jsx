import { useEffect, useState } from "react";
import Book from "./Book.jsx";
import "./bookList.css";
import FormBook from "./FormBook.jsx";

export default function BookList() {
  const [showFormBook, setShowFormBook] = useState(false);
  const [dropDownGenres, setDropDownGenres] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectedBook = (book) => {
    setSelectedBook(book);
    setShowFormBook(true);
  };

  const handleCreateBook = (newBook) => {
    setBooks([newBook, ...books]);
    setShowFormBook(false);
    alert("Libro creado con éxito");
  };

  const handleUpdateBook = (valuesUpdatedBook) => {
    const updatedBooks = books.map((book) => {
      if (book.id === valuesUpdatedBook.id) {
        return valuesUpdatedBook;
      }
      return book;
    });

    setBooks(updatedBooks);
    setShowFormBook(false);
    alert("Libro actualizado con éxito");
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== bookId;
    });

    setBooks(updatedBooks);
    alert("Libro eliminado con éxito");
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch("http://localhost:3000/generos");
      const data = await response.json();
      setDropDownGenres(data);
    };

    fetchGenres();

    const fetchBooks = async () => {
      const response = await fetch("http://localhost:3000/libros");
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const handleShowFormBook = () => {
    setShowFormBook(true);
    setSelectedBook(null);
  };

  const handleHideModalFormBook = () => {
    setShowFormBook(false);
  };

  return (
    <div className="container_book_list">
      <div className="btn_agregar_container">
        <button className="btn_agregar" onClick={handleShowFormBook}>
          Agregar libro
        </button>
      </div>
      {showFormBook && (
        <>
          <div className="overlay"></div>
          <div className="container_form">
            <div className="close_form">
              <button onClick={handleHideModalFormBook}>&times;</button>
            </div>
            <FormBook
              genres={dropDownGenres}
              selectedBook={selectedBook}
              handleCreateBook={handleCreateBook}
              handleUpdateBook={handleUpdateBook}
            />
          </div>
        </>
      )}
      <h1 className="title_library">Librería</h1>
      <h3 className="subtitle_library">Nuestro catálogo de libros</h3>
      <div className="container_books">
        {books.length > 0 &&
          books.map((book) => (
            <Book
              key={book.id}
              genres={dropDownGenres}
              book={book}
              handleSelectedBook={handleSelectedBook}
              handleDeleteBook={handleDeleteBook}
            />
          ))}
      </div>
    </div>
  );
}
