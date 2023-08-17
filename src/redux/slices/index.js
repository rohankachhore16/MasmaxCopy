import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./authSlice";

export default combineReducers({
  auth: AuthSlice,
});
