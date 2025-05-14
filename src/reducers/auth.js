import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  id: "",
  email: ""
};

const initialState = {
  isLoggedIn: false,
  current: initialUser
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.current = initialUser;
    },
    setUser: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice;
