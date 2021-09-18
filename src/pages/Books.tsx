import React, { FC, useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTypeSelector } from "../hooks/useTypeSelector";
import IBook from "../models/IBook";
import firstStart from "../utils/firstStart";
import { startBooks } from "../constants";
import Modal from "../components/Modal/Modal";
import BookList from "../components/BookList/BookList";
import BookFilter from "../components/BookFilter/BookFilter";

const Books: FC = () => {
  
  const { user }= useTypeSelector((store) => store.auth);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bookID, setBookID] = useState<string>("");
  const [books, setBooks] = useLocalStorage(
    startBooks,
    `${user.username}'s_books`
  );
  const [sortType, setSortType] = useLocalStorage(
    { type: "name", direction: "down" },
    "sort_type"
  );
  const [searchData, setSearchData] = useState<string>("");

  useEffect(() => {
    firstStart(setBooks, user.username );
  }, []);

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

  function deleteBook(id: string) {
    setModalVisible(true);
    setBookID(id);
  }
  function confirmDeleteBook(id: string) {
    const newBookList = books.filter((book: IBook) => book.id !== id);
    setBooks(newBookList);
    setModalVisible(false);
    setBookID("");
  }

  return (
    <>
      <h1 className="padding">Список книг</h1>
      <div className="center">

      <BookFilter
        sortType={sortType}
        setSortType={setSortType}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <BookList books={sortedAndSearchedBooks} deleteBook={deleteBook} />
      </div>


      {modalVisible && (
        <Modal
          title={" Точно удалить? "}
          firstBtnName={"Да"}
          firstBtnFunction={() => confirmDeleteBook(bookID)}
          secondBtnName={"Нет"}
          secondBtnFunction={() => setModalVisible(false)}
        />
      )}
    </>
  );
};

export default Books;
