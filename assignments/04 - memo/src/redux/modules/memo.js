import {createSlice} from "@reduxjs/toolkit";

const CURRENT_TIME_STAMP = Date.now();

const initialMemosState = {
  memos: [],
  selectedMemoID: CURRENT_TIME_STAMP,
  textarea: "",
};

const memo = createSlice({
  name: "memo",
  initialState: initialMemosState,
  reducers: {
    SET_TEXT_AREA: (state) => {
      const selectedMemoIndex = state.memos.findIndex((memo) => {
        return memo.id == state.selectedMemoID;
      });
      state.textarea = state.memos[selectedMemoIndex].content;
    },

    SET_SELECTED_MEMO_ID: (state, action) => {
      state.selectedMemoID = action.payload;
    },
    INITIALIZE_MEMO: (state, action) => {
      state.memos = state.memos ? [...state.memos, action.payload] : [action.payload];
      state.selectedMemoID = action.payload.id;
      // localStorage.setItem("memos", JSON.stringify([...state.memos]));
    },
    UPDATE_MEMO: (state, action) => {
      const selectedMemoIndex = state.memos.findIndex((memo) => {
        return memo.id == state.selectedMemoID;
      });
      state.memos[selectedMemoIndex] = {
        ...state.memos[selectedMemoIndex],
        content: action.payload.inputText,
        id: state.selectedMemoID,
      };
      state.textarea = state.memos[selectedMemoIndex].content;
      localStorage.setItem("memos", JSON.stringify([...state.memos]));
    },
    CREATE_MEMO: (state, action) => {
      state.memos = [...state.memos, action.payload];
      state.selectedMemoID = action.payload.id;
      localStorage.setItem("memos", JSON.stringify([...state.memos]));
    },
    DELETE_MEMO: (state) => {
      const selectedMemoIndex = state.memos.findIndex((memo) => {
        return memo.id == state.selectedMemoID;
      });
      state.memos.splice(selectedMemoIndex, 1);

      const sortedMemos = [...state.memos].sort(function (a, b) {
        return parseInt(b.id) - parseInt(a.id);
      });

      state.selectedMemoID = sortedMemos[0].id;
      localStorage.setItem("memos", JSON.stringify([...state.memos]));
    },
  },
});

export const {SET_SELECTED_MEMO_ID, SET_TEXT_AREA, UPDATE_MEMO, INITIALIZE_MEMO, CREATE_MEMO, DELETE_MEMO} = memo.actions;
export default memo.reducer;
