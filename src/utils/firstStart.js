import { startBooks } from "../constants";

const firstStart = (addFirstBooks, username) => {
  const notFirstStart = JSON.parse(
    window.localStorage.getItem(`${username}'s_notFirstStart`)
  );
  if (!notFirstStart) {
    window.localStorage.setItem(
      `${username}'s_notFirstStart`,
      JSON.stringify(true)
    );
    addFirstBooks(startBooks);
  }
};

export default firstStart;
