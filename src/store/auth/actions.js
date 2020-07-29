export const LOADING = "LOADING";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const SET_AUTH_ERROR = "SET_AUTH_ERROR";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const login = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
};

export const setAuthError = (payload) => {
  return {
    type: SET_AUTH_ERROR,
    payload,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};
