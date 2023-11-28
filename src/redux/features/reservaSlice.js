import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    mesas: [],
    qr: ""
  },
};

export const reservaSlice = createSlice({
  name: "reserva",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },

    reset: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { update, reset } = reservaSlice.actions;

export default reservaSlice.reducer;
