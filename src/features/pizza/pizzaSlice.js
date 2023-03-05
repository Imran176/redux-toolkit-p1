import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfPizza: 22,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfPizza -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfPizza += action.payload;
    },
  },
});

export default pizzaSlice.reducer;
export const { ordered, restocked } = pizzaSlice.actions;
