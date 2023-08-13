import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Initialize with an empty array
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // check is exsit
      const index = state.items.findIndex((item) => {
        return item.id == action.payload.id;
      });
      // if exsite counter plus plus
      if (index >= 0) {
        const tempItems = [...state.items];
        tempItems[index].count++;
        state.items = tempItems;
      } else {
        const temPayloud = { ...action.payload };
        temPayloud["count"] = 1;
        state.items.push(temPayloud);
      }
      //else  add count property and push to state
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload);
      const index = state.items.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index >= 0) {
        if (state.items[index].count > 1) {
          const tempItems = [...state.items];
          tempItems[index].count--;
          state.items = tempItems;
        } else
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
