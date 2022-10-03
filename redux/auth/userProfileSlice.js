import { createSlice } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const initialState = {
  userProfile: {},
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
