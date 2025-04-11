// src/reducers/auth.js

import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";

// 액션 생성자
export const login = createAction(LOGIN);   // payload는 true
export const logout = createAction(LOGOUT); // payload는 false

// 초기 상태
const initialState = {
  isLoggedIn: false,
};

// 리듀서
const auth = handleActions(
  {
    [LOGIN]: (state, action) => ({
      ...state,
      isLoggedIn: true,
    }),
    [LOGOUT]: (state, action) => ({
      ...state,
      isLoggedIn: false,
    }),
  },
  initialState
);

export default auth;
