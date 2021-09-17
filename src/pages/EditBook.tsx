import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useParams } from "react-router-dom";
import { initialInputs } from "../constants";
import Modal from "../components/Modal/Modal";
import BookForm from "../components/BookForm/BookForm";
import IBook from "../models/IBook";

function EditBook() {
  interface IID {
    id: string;
  }

  const { id }: IID = useParams();
  const history = useHistory();
  const { user } = useTypeSelector((state) => state.auth);
  const [inputs, setInputs] = useState<IBook>(initialInputs);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const storageData = localStorage.getItem(`${user.username}'s_books`);
    const books: IBook[] = storageData ? JSON.parse(storageData) : [];
    const editableBook = books.find((book) => book.id === id);
    if (editableBook) {
      setInputs(editableBook);
    }
  }, [id]);

  function edit() {
    const storageData = localStorage.getItem(`${user.username}'s_books`);
    const books = storageData ? JSON.parse(storageData) : [];
    const EditableBook = books.find((book: IBook) => book.id === id);
    const indexEditableBook = books.indexOf(EditableBook);
    books.splice(indexEditableBook, 1, inputs);
    window.localStorage.setItem(
      `${user.username}'s_books`,
      JSON.stringify(books)
    );
    setModalVisible(true);
  }

  return (
    <>
      <div className="full_heigth center">
        <h1 className="margin">Редакторовать</h1>
        <BookForm
          inputs={inputs}
          setInputs={setInputs}
          submitBtnName="Изменить"
          submit={edit}
        />
        {modalVisible && (
          <Modal
            title={"Изменения успешно внесены"}
            firstBtnName={"OK"}
            firstBtnFunction={() => setModalVisible(false)}
            secondBtnName={"К списку книг"}
            secondBtnFunction={() => history.push("/")}
          />
        )}
      </div>
    </>
  );
}

export default EditBook;
