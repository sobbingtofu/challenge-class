import {MemoInputSection} from "../MainSection.styledcomp";
import {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_MEMO} from "../../../redux/modules/memo";

const TextArea = () => {
  const textAreaRef = useRef(null);

  const memoList = useSelector((state) => {
    return state.memo.memos;
  });

  const selectedMemoID = useSelector((state) => {
    return state.memo.selectedMemoID;
  });

  const selectedMemoIndex = memoList.findIndex((memo) => {
    return memo.id == selectedMemoID;
  });

  const textareaValue = memoList[selectedMemoIndex] ? memoList[selectedMemoIndex].content : "";

  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputText !== "") {
      dispatch(UPDATE_MEMO({inputText}));
      // dispatch(SET_TEXT_AREA(inputText));
    }
  }, [inputText, dispatch]);

  if (textAreaRef.current !== null) {
    textAreaRef.current.focus();
  }

  const handleMemoChange = (event) => {
    if (event.target.value === "") {
      setInputText(event.target.value);
      dispatch(UPDATE_MEMO({inputText: ""}));
      // dispatch(SET_TEXT_AREA(""));
    } else {
      setInputText(event.target.value);
    }
  };

  return (
    <>
      {/* <MemoInputSection type="text" autoFocus onChange={handleMemoChange} value={inputText ? inputText : textareaValue} ref={textAreaRef} /> */}
      <MemoInputSection type="text" autoFocus onChange={handleMemoChange} value={textareaValue ? textareaValue : inputText} ref={textAreaRef} />
    </>
  );
};

export default TextArea;
