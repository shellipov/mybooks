import React, { FC, useRef } from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button/Button";
import styles from "./style.module.scss";

interface IModalProps {
  title: string;
  firstBtnName: string;
  firstBtnFunction: () => void;
  secondBtnName: string;
  secondBtnFunction: () => void;
}

const Modal: FC<IModalProps> = ({
  title,
  firstBtnName,
  firstBtnFunction,
  secondBtnName,
  secondBtnFunction,
}) => {
  const history = useHistory();
  const modalWindow = useRef(null);

  return ReactDom.createPortal(
    <>
      <div className={styles.modal_background}>
        <div ref={modalWindow} className={styles.modal_window}>
          <div className="center row margin">
            <h3 className="title">{title}</h3>
          </div>

          <div className="center row">
            <Button onClick={firstBtnFunction}>{firstBtnName}</Button>
            <Button onClick={secondBtnFunction}>{secondBtnName}</Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")!
  );
};
export default Modal;
