import React, { FC } from "react";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import { sortData } from "../../constants";

import styles from "./styles.module.scss";

interface IBookFilterProps {
  sortType: string;
  setSortType: (e: string) => void;
  searchData: string;
  setSearchData: (e: string) => void;
}

const BookFilter: FC<IBookFilterProps> = ({
  sortType,
  setSortType,
  searchData,
  setSearchData,
}) => {
  return (
    <div className={styles.buttons_block}>
      <div className={styles.sort_block}>
        <div className={styles.text}>Сортировать&nbsp;по</div>
        <Select
          defaultValue="Сортировка"
          options={sortData}
          value={sortType}
          onChange={setSortType}
        />
      </div>
      <div className={styles.search_block}>
        <Input
          placeholder={"Поиск"}
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        ></Input>
      </div>
    </div>
  );
};

export default BookFilter;
