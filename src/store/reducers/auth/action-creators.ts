import IUser from "../../../models/IUser";
import authApi from "../../../api/authApi";
import { AppDispatch } from "../../index";
import {
  SetIsAuthAction,
  SetIsLoading,
  SetUser,
  SetError,
  AuthActionTypeEnum,
} from "./types";

export const AuthActionCreators = {
  setIsAuth: (isAuth: boolean): SetIsAuthAction => ({
    type: AuthActionTypeEnum.SET_IS_AUTH,
    payload: isAuth,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoading => ({
    type: AuthActionTypeEnum.SET_IS_LOADING,
    payload: isLoading,
  }),

  setUser: (user: IUser): SetUser => ({
    type: AuthActionTypeEnum.SET_USER,
    payload: user,
  }),

  setError: (error: string): SetError => ({
    type: AuthActionTypeEnum.SET_ERROR,
    payload: error,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        const { data } = await authApi.getUsers();
        const mockUser = data.find(
          (user: IUser) =>
            user.username === username && user.password === password
        );
        if (mockUser) {
          localStorage.setItem("isAuth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setIsAuth(true));
        } else {
          dispatch(AuthActionCreators.setError("Неверный логин или пароль"));
        }

        dispatch(AuthActionCreators.setIsLoading(false));
      } catch (error) {
        dispatch(AuthActionCreators.setError("Произошло ошибка"));
      }
    },
    logout: () => async (dispatch: AppDispatch) => {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));

  },
};
