import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userProfileReducer from "./auth/userProfileSlice";

export const store = (preloadedState) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      userProfile: userProfileReducer,
    },
    preloadedState
  });
};
