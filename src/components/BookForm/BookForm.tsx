import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import LabelInput from "../UI/Input/LabelInput";
import Button from "../UI/Button/Button";
import IBook from "../../models/IBook";
import book from "../../images/book.jpg";
import videoFile from "../../data/video.mp4";
import "./style.scss";

interface IBookForm {
  inputs: IBook;
  setInputs: (inputs: IBook) => void;
  submitBtnName: string;
  submit: () => void;
}

const BookForm: FC<IBookForm> = ({
  inputs,
  setInputs,
  submitBtnName,
  submit,
}) => {
  const [error, setError] = useState<string>("");
  const history = useHistory();
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isImageLoad, setIsImageLoad] = useState(false);
  const { name, autors, page_number, publisher_name, year, image } = inputs;

  const this_year = new Date().getFullYear();

  function changeInputValue(e: any) {
    const { name, value } = e.target;
    setIsChanged(true);
    setError("");
    setInputs({ ...inputs, [name]: value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let errors = 0;

    if (inputs.autors.split(" ").length % 2 !== 0) {
      errors++;
      setError("Введите Имя и Фамилию автора через пробел");
    }

    if (inputs.autors.split(" ").find((word) => word.length > 20)) {
      errors++;
      setError("Имя или Фамилия должны быть не длиннее 20 символов");
    }

    if (errors === 0) {
      submit();
    }
  };

  return (
    <>
      <div className="add_book_page">
        <form onSubmit={handleSubmit} className="add_book_form">
          <LabelInput
            label="Название книги"
            placeholder="Например: Война и мир"
            type="text"
            name="name"
            onChange={(e) => changeInputValue(e)}
            value={name}
            maxLength={30}
          />

          <LabelInput
            label="Автор книги"
            placeholder="Например: Лев Толстой (Если авторов несколько, введите их через запятую)"
            type="text"
            name="autors"
            onChange={(e) => changeInputValue(e)}
            value={autors}
          >
            {error && <span className="error">Ошибка: {error}</span>}
          </LabelInput>

          <LabelInput
            label="Количесво страниц"
            placeholder="Например: 850"
            type="number"
            name="page_number"
            onChange={(e) => changeInputValue(e)}
            value={page_number}
            min={1}
            max={10000}
          />

          <LabelInput
            label="Название издательства"
            placeholder="Например: Просвещение"
            type="text"
            name="publisher_name"
            onChange={(e) => changeInputValue(e)}
            value={publisher_name}
            maxLength={30}
          />

          <LabelInput
            label="Год издательства"
            placeholder="Например: 1920"
            type="number"
            name="year"
            onChange={(e) => changeInputValue(e)}
            value={year}
            min={1800}
            max={this_year}
          />

          <div className="add_image_block">
            <div className="col-md-10">
              <LabelInput
                label="Обложка"
                placeholder="Например: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg"
                type="text"
                name="image"
                onChange={(e) => changeInputValue(e)}
                value={image}
              />
              <span className="description">
                Найдите подходящую картинку в интернете и вставте её url{" "}
                <a className="link" data-fancybox="gallery" href={videoFile}>
                  <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                </a>
              </span>
            </div>
            <div className="center">
              <img
                className="book"
                src={isImageLoad ? image : book}
                alt="book_image"
              />
            </div>
          </div>

          <div className="center row">
            {isChanged && (
              <>
                <Button type="submit" color="blue">
                  {submitBtnName}
                </Button>
                <div className="gap"></div>
              </>
            )}
            <Button color="red" onClick={() => history.push("/")}>
              Назад
            </Button>
          </div>
        </form>
        <div hidden={true}>
          <img
            onLoad={() => setIsImageLoad(true)}
            onError={() => setIsImageLoad(false)}
            hidden={true}
            src={image}
            alt="book_image"
          />
        </div>
      </div>
    </>
  );
};

export default BookForm;
