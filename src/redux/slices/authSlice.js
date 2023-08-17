import { createSlice } from "@reduxjs/toolkit";
import { authAsyncThunk } from "../asyncThunk/authAsynckThunk";
import { THUNK_STATUS } from "../constant/reduxConstant";
const initialState = {
  user: null,
  userStatus: null,
  token: null,
  status: null,
};
export const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authAsyncThunk.pending, (state, action) => {
      state.userStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(authAsyncThunk.fulfilled, (state, action) => {
      state.userStatus = THUNK_STATUS.SUCCESS;
    });
    builder.addCase(authAsyncThunk.rejected, (state, action) => {
      state.userStatus = THUNK_STATUS.FAILED;
    });
  },
});
export const { removeToken } = AuthSlice.actions;
export const authState = (state) => state.authState;
export default AuthSlice.reducer;
