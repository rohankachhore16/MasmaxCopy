import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant/reduxConstant";
import { AuthService } from "../services/autlService";

export const authAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AuthService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
