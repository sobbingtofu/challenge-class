import {useDispatch} from "react-redux";
import {StyledMemoHandler} from "../MemoHandlingTexts.styledComp";
import {CREATE_MEMO} from "../../../../redux/modules/memo";

const AddNewMemo = () => {
  const dispatch = useDispatch();
  const handleClickAddNewMemo = () => {
    const CURRENTDATE = new Date();
    // const NewMemoTemplate = {content: "", id: Date.now(), time: CURRENTDATE.toLocaleString().slice(13, -3)};
    // console.log(NewMemoTemplate);
    dispatch(CREATE_MEMO({content: "", id: Date.now(), time: CURRENTDATE.toLocaleString().slice(13, -3)}));
  };

  return <StyledMemoHandler onClick={handleClickAddNewMemo}>새 메모 작성</StyledMemoHandler>;
};

export default AddNewMemo;
