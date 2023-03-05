import { createSlice } from "@reduxjs/toolkit";
import { ordered as pizzaOrdered } from "../pizza/pizzaSlice";

const initialState = {
  numOfIcecream: 50,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["pizza/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(pizzaOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
