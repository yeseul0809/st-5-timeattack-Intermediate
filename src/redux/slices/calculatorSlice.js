// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

export const counterSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    minus: (state, action) => {
      state.result -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, minus } = counterSlice.actions;
export default counterSlice.reducer;
