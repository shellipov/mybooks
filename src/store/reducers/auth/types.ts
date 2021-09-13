import IUser from "../../../models/IUser";

export interface IAuthState {
  isAuth: boolean;
  isLoading: boolean;
  user: IUser;
  error: string;
}

export enum AuthActionTypeEnum {
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
}

export interface SetIsAuthAction {
  type: AuthActionTypeEnum.SET_IS_AUTH;
  payload: boolean;
}
export interface SetIsLoading {
  type: AuthActionTypeEnum.SET_IS_LOADING;
  payload: boolean;
}
export interface SetUser {
  type: AuthActionTypeEnum.SET_USER;
  payload: IUser;
}
export interface SetError {
  type: AuthActionTypeEnum.SET_ERROR;
  payload: string;
}

export type AuthActions = SetIsAuthAction | SetIsLoading | SetUser | SetError;
