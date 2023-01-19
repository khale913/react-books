import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title: title },
    ];
    setBooks(updatedBooks);
    console.log(books);

    console.log("Need to add book with:", title);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById}></BookList>
      <BookCreate onCreate={createBook}></BookCreate>
    </div>
  );
}

export default App;
