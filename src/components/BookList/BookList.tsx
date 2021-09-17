import React, { FC, useState } from "react";
import IBook from "../../models/IBook";
import Bookcard from "../BookCard/Bookcard";
import styles from "./styles.module.scss";

interface IBookListProps {
  books: IBook[];
  deleteBook: (id: string) => void;
}

const BookList: FC<IBookListProps> = ({ books, deleteBook }) => {
  return (
    <>
      <div className={styles.card_list}>
        {books.length ? (
          <>
            {books.map((book) => {
              return (
                <Bookcard key={book.id} book={book} deleteBook={deleteBook} />
              );
            })}
          </>
        ) : (
          <>
            <div className={styles.there_no_books}>Книг нет</div>
          </>
        )}
      </div>
    </>
  );
};

export default BookList;
