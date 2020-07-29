import { ofType } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { from, of } from "rxjs";
import { api } from "../../service/api";

import {
  LOGIN_USER,
  setCurrentUser,
  setAuthError,
  loginSuccess,
  logoutSuccess,
  LOGOUT_USER,
} from "./actions";

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_USER),
    mergeMap((action) =>
      from(api.post({ url: "/auth/login", data: action.payload }, false)).pipe(
        mergeMap((response) => {
          const currentUser = { token: response.access_token };
          return [setCurrentUser(currentUser), loginSuccess(response)];
        }),
        catchError((error) => of(setAuthError(error.message)))
      )
    )
  );

export const logoutEpic = (action$) =>
  action$.pipe(
    ofType(LOGOUT_USER),
    map(() => {
      return logoutSuccess();
    }),
    catchError(() => of(setAuthError("Error")))
  );
