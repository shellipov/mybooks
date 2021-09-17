import React from "react";
import Auth from "../pages/Auth";
import About from "../pages/About";
import Books from "../pages/Books";
import AddBookPage from "../pages/AddBookPage";
import EditBook from "../pages/EditBook";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutePaths {
  BOOKS = "/",
  ADD_BOOK = "/add_book",
  EDIT_BOOK = "/edit_book:id",
  AUTH = "/auth",
  ABOUT = "/about",
}

export const privateRoutes = [
  {
    path: RoutePaths.BOOKS,
    component: Books,
    exact: true,
  },
  {
    path: RoutePaths.ADD_BOOK,
    component: AddBookPage,
    exact: true,
  },
  {
    path: RoutePaths.EDIT_BOOK,
    component: EditBook,
    exact: true,
  },
  {
    path: RoutePaths.ABOUT,
    component: About,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: RoutePaths.AUTH,
    component: Auth,
    exact: true,
  },
  {
    path: RoutePaths.ABOUT,
    component: About,
    exact: true,
  },
];
