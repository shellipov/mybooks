import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes, RoutePaths } from "../routes";
import {useTypeSelector} from "../hooks/useTypeSelector"

const AppRouter = () => {
  const { isAuth } = useTypeSelector(store => store.auth)

  return isAuth ? (
    <>
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          ></Route>
        ))}
        <Redirect to={RoutePaths.BOOKS} />
      </Switch>
    </>
  ) : (
    <>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          ></Route>
        ))}
        <Redirect to={RoutePaths.AUTH} />
      </Switch>
    </>
  );
};

export default AppRouter;
