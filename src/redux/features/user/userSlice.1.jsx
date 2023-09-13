import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./userSlice";

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: () => {
      setUser: (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.name;
      };
      toggleLoading: (state, { payload }) => {
        state.isLoading = payload;
      };
    },
    extraReducers: (builder) => {
      builder
        .addCase(createUser.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.email = "";
          state.name = "";
          state.error = "";
        })
        .addCase(createUser.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.isError = false;
          state.email = payload.email;
          state.name = payload.name;
          state.error = "";
        })
        .addCase(createUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.email = "";
          state.name = "";
          state.error = action.error.message;
        });
    },
  },
});
