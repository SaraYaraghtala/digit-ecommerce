import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [], // Initialize with an empty array
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload)
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
