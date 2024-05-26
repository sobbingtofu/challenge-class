import {useDispatch, useSelector} from "react-redux";
import {MemoContainer, MemoItem, MemoTitle, MemoTime, SelectedMemoItem} from "./MemoList.StyledComp";
import {SET_SELECTED_MEMO_ID, SET_TEXT_AREA} from "../../../redux/modules/memo";

const MemoList = () => {
  const dispatch = useDispatch();

  const memoList = useSelector((state) => {
    return state.memo.memos;
  });
  const sortedMemoList = [...memoList].sort(function (a, b) {
    return parseInt(b.id) - parseInt(a.id);
  });

  const selectedMemoID = useSelector((state) => {
    return state.memo.selectedMemoID;
  });

  const generateMemoTitle = (memo) => {
    if (memo.length === 0) {
      return "새로운 메모";
    } else {
      if (memo.length <= 12) {
        return memo;
      } else {
        return `${memo.slice(0, 12) + "..."}`;
      }
    }
  };

  const handleMemoClick = (event) => {
    const clickedMemoId = event.target.id ? event.target.id : event.target.parentNode.id;
    dispatch(SET_SELECTED_MEMO_ID(clickedMemoId));
    dispatch(SET_TEXT_AREA());
    console.log(selectedMemoID);
  };

  // console.log(selectedMemoID);
  return (
    <MemoContainer>
      {sortedMemoList.map((memo) => {
        if (memo.id == selectedMemoID) {
          return (
            <SelectedMemoItem key={memo.id} id={memo.id}>
              <MemoTitle>{generateMemoTitle(memo.content)}</MemoTitle>
              <MemoTime>{memo.time}</MemoTime>
            </SelectedMemoItem>
          );
        } else {
          return (
            <MemoItem key={memo.id} id={memo.id} onClick={handleMemoClick}>
              <MemoTitle>{generateMemoTitle(memo.content)}</MemoTitle>
              <MemoTime>{memo.time}</MemoTime>
            </MemoItem>
          );
        }
      })}
    </MemoContainer>
  );
};

export default MemoList;
