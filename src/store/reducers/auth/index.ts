import IUser from "../../../models/IUser";
import { IAuthState, AuthActions, AuthActionTypeEnum } from "./types";

const initialState: IAuthState = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser,
  error: "",
};

export default function AuthReducer(
  state = initialState,
  action: AuthActions
): IAuthState {
  switch (action.type) {
    case AuthActionTypeEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };

    case AuthActionTypeEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case AuthActionTypeEnum.SET_USER:
      return { ...state, user: action.payload };

    case AuthActionTypeEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
