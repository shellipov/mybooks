import { startBooks } from "../constants";
import IBook from "../models/IBook";

const firstStart = (
  addFirstBooks: (books: IBook[]) => void,
  username: string
) => {
  const data = localStorage.getItem(`${username}'s_notFirstStart`);
  const notFirstStart = data ? JSON.parse(data) : false;
  if (!notFirstStart) {
    window.localStorage.setItem(
      `${username}'s_notFirstStart`,
      JSON.stringify(true)
    );
    addFirstBooks(startBooks);
  }
};

export default firstStart;
