import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export enum IUILinkType {
  link = "link",
  button = "button",
}

interface IUILink {
  type?: IUILinkType;
  children: string;
  to: string;
}

export const UILink: FC<IUILink> = ({
  children,
  type = IUILinkType.link,
  ...props
}) => {
  const types = {
    link: styles.link,
    button: styles.button,
  };

  return (
    <Link className={[styles.uilink, types[type]].join(" ")} {...props}>
      {children}
    </Link>
  );
};
