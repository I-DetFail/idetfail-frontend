import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  dataUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
  },
});

export const { setIsLogin, setDataUser } = authSlice.actions;

export default authSlice.reducer;
