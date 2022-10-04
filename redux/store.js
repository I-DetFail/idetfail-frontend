import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userProfileReducer from "./auth/userProfileSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
  },
});
