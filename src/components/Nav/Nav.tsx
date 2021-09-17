import React, { FC } from "react";
import { Route } from "react-router-dom";
import { UILink, IUILinkType } from "../UI/UILink/UILink";
import { RoutePaths } from "../../routes";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./style.module.scss";
import Button from "../UI/Button/Button";

const Nav: FC = () => {
  const { isAuth, user } = useTypeSelector((store) => store.auth);
  const { logout } = useActions();
  return (
    <header className={styles.nav}>
      <div className={styles.title_block}>
        <div className={styles.title}>Редактор книг</div>
      </div>

      <div className={styles.link_block}>
        {isAuth ? (
          <>
            <Route exact path={RoutePaths.BOOKS}>
              <UILink type={IUILinkType.button} to={RoutePaths.ABOUT}>
                О программе
              </UILink>
              <UILink type={IUILinkType.button} to={RoutePaths.ADD_BOOK}>
                Добавить книгу
              </UILink>
            </Route>
            <Route exact path={RoutePaths.ADD_BOOK}>
              <UILink type={IUILinkType.button} to={RoutePaths.ABOUT}>
                О программе
              </UILink>
              <UILink type={IUILinkType.button} to={RoutePaths.BOOKS}>
                Мои книги
              </UILink>
            </Route>
            <Route exact path={RoutePaths.ABOUT}>
              <UILink type={IUILinkType.button} to={RoutePaths.BOOKS}>
                Мои книги
              </UILink>
              <UILink type={IUILinkType.button} to={RoutePaths.ADD_BOOK}>
                Добавить книгу
              </UILink>
            </Route>
            <Button color="red" onClick={logout}>
              {`Выйти из ${user.username}`}
            </Button>
          </>
        ) : (
          <>
            <Route exact path={RoutePaths.ABOUT}>
              <UILink type={IUILinkType.button} to={RoutePaths.AUTH}>
                Список книг
              </UILink>
            </Route>

            <Route exact path={RoutePaths.AUTH}>
              <UILink type={IUILinkType.button} to={RoutePaths.ABOUT}>
                О программе
              </UILink>
            </Route>
          </>
        )}
      </div>
    </header>
  );
};

export default Nav;
