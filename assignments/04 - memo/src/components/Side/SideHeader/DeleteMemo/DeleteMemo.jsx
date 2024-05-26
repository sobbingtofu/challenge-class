import {useDispatch, useSelector} from "react-redux";
import {StyledMemoHandler} from "../MemoHandlingTexts.styledComp";
import {DELETE_MEMO} from "../../../../redux/modules/memo";

const DeleteMemo = () => {
  const dispatch = useDispatch();
  const memoList = useSelector((state) => {
    return state.memo.memos;
  });
  const handleClickDeleteMemo = () => {
    if (memoList.length < 2) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
    }
    dispatch(DELETE_MEMO());
  };
  return <StyledMemoHandler onClick={handleClickDeleteMemo}>삭제</StyledMemoHandler>;
};

export default DeleteMemo;
