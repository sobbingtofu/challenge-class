/* eslint-disable react-hooks/exhaustive-deps */
import {Styledbody} from "./components/App.styledcomp";
import Side from "./components/Side/Side";
import Main from "./components/Main/Main";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {INITIALIZE_MEMO, CREATE_MEMO} from "./redux/modules/memo";

function App() {
  const dispatch = useDispatch();
  const currentMemoList = JSON.parse(localStorage.getItem("memos"));
  console.log(currentMemoList);

  useEffect(() => {
    if (currentMemoList === null || currentMemoList === undefined || currentMemoList.length === 0) {
      const CURRENTDATE = new Date();
      dispatch(INITIALIZE_MEMO({content: "", id: Date.now(), time: CURRENTDATE.toLocaleString().slice(13, -3)}));
    } else {
      currentMemoList.forEach((memo) => {
        dispatch(CREATE_MEMO({content: memo.content, id: memo.id, time: memo.time}));
      });
    }
  }, []);
  return (
    <Styledbody>
      <Side />
      <Main />
    </Styledbody>
  );
}

export default App;
