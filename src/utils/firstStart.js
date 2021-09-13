import { startBooks } from "../constants";

const firstStart = (addFirstBooks) => {
    const notFirstStart = JSON.parse(window.localStorage.getItem("notFirstStart"));
    if (!notFirstStart) {
      window.localStorage.setItem("notFirstStart", JSON.stringify(true));
      addFirstBooks(startBooks);
    }
};

export default firstStart;
