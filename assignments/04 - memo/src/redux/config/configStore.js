import {configureStore} from "@reduxjs/toolkit";
import memo from "../modules/memo";

const store = configureStore({
  reducer: {
    memo: memo,
  },
});

export default store;
