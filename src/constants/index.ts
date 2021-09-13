import IBook from '../models/IBook'

export const startBooks: IBook[] = [
  {
    autors: "Джордан Р.",
    image: "https://img-gorod.ru/28/593/2859307_detail.jpg",
    name: "Колесо Времени. Книга 6. Властелин хаоса",
    id: "12340208T114017221Z",
    page_number: "1088",
    publisher_name: "Азбука",
    year: "2021",
  },
  {
    autors: "Глуховский Дмитрий",
    image: "https://img-gorod.ru/28/634/2863449_detail.jpg",
    name: "Пост",
    id: "23450208T103828799Z",
    page_number: "432",
    publisher_name: "АСТ",
    year: "2021",
  },
  {
    autors: "Минник К., Холланд Е.",
    image: "https://img-gorod.ru/25/138/2513816_detail.jpg",
    name: "JavaScript для чайников",
    id: "234560205T130243997Z",
    page_number: "320",
    publisher_name: "Вильямс Издательский дом",
    year: "2019",
  },
  {
    autors: "Рей Брэдбери",
    image: "https://img3.labirint.ru/rc/c29d2082295ab169ff78b9ed72123f01/220x340/books56/556173/cover.jpg?1565703130",
    name: "451° по Фаренгейту",
    id: "45670208T114017221Z",
    page_number: "760",
    publisher_name: "Эксмо-Пресс",
    year: "2016",
  },
  {
    autors: "Лев Толстой",
    image: "https://b1.culture.ru/c/365442.jpg",
    name: "Война и Мир",
    id: "56780208T103828799Z",
    page_number: "990",
    publisher_name: "Русский вестник",
    year: "1865",
  },
  {
    autors: "Русский народ",
    image: "https://img2.wbstatic.net/big/new/11100000/11100300-1.jpg",
    name: "Русские народные сказки",
    id: "67890205T130243997Z",
    page_number: "230",
    publisher_name: "Слово",
    year: "1980",
  },
];



export const sortData = [
  {
    value: { type: "name", direction: "down" },
    name: "названию ↓",
  },
  {
    value: { type: "name", direction: "up" },
    name: "названию ↑",
  },
  {
    value: { type: "autors", direction: "down" },
    name: "автору ↓",
  },
  {
    value: { type: "autors", direction: "up" },
    name: "автору ↑",
  },
  {
    value: { type: "year", direction: "down" },
    name: "дате публикации ↓",
  },
  {
    value: { type: "year", direction: "up" },
    name: "дате публикации ↑",
  },
];

export const initialInputs: IBook = {
  name: "",
  autors: "",
  page_number: "",
  publisher_name: "",
  year: "",
  image: "",
  id: "",
};
