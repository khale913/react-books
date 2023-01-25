import { useContext } from "react";
import BooksContext from "../components/context/books";
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
