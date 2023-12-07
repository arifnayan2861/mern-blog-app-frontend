import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/userReducers";

//saving data from localstorage to redux state
const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;

const initialState = {
  user: {
    userInfo: userInfoFromStorage,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
