import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { initialInputs } from "../constants";
import BookForm from "../components/BookForm/BookForm";
import Modal from "../components/Modal/Modal";
import createID from "../utils/createID";

const AddBookPage: FC = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState(initialInputs);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { user } = useTypeSelector((state) => state.auth);

  function AddBook() {
    const storageData = localStorage.getItem(`${user.username}'s_books`);
    const books = storageData ? JSON.parse(storageData) : [];
    const id = createID();
    books.push({ ...inputs, id: id });
    window.localStorage.setItem(
      `${user.username}'s_books`,
      JSON.stringify(books)
    );
    setInputs(initialInputs);
    setModalVisible(true);
  }

  return (
    <>
      <div className="full_heigth center">
        <div className="margin">
          <h1>Новая книга</h1>
        </div>
        <BookForm
          inputs={inputs}
          setInputs={setInputs}
          submit={AddBook}
          submitBtnName="Добавить"
        />
      </div>
      {modalVisible && (
        <Modal
          title={"Книга успешно добавлена"}
          firstBtnName={"Добавить еще"}
          firstBtnFunction={() => setModalVisible(false)}
          secondBtnName={"К списку книг"}
          secondBtnFunction={() => history.push("/")}
        />
      )}
    </>
  );
};

export default AddBookPage;
