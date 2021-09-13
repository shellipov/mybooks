import React, { FC, useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import IBook from "../models/IBook";
import firstStart from "../utils/firstStart";
import { startBooks } from "../constants";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter/BookFilter";

const Books: FC = () => {
  const [books, setBooks] = useLocalStorage(startBooks, "books");

  const [sortType, setSortType] = useLocalStorage(
    { type: "name", direction: "down" },
    "sort_type"
  );
  const [searchData, setSearchData] = useState<string>("");

  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) =>
      sortType.direction === "up"
        ? b[sortType.type].localeCompare(a[sortType.type])
        : a[sortType.type].localeCompare(b[sortType.type])
    );
  }, [sortType, books]);

  const sortedAndSearchedBooks = useMemo(() => {
    const nameFiltedBooks = sortedBooks.filter((book) =>
      book.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
    );
    return nameFiltedBooks;
  }, [searchData, sortedBooks]);

  useEffect(() => {
    firstStart(setBooks);
  }, []);

  function deleteBook(id: string) {
    const newBookList = books.filter((book: IBook) => book.id !== id);
    setBooks(newBookList);
  }

  return (
    <>
      <h1 className="padding">Список книг</h1>
      <BookFilter
        sortType={sortType}
        setSortType={setSortType}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <BookList books={sortedAndSearchedBooks} deleteBook={deleteBook} />
    </>
  );
};

export default Books;
