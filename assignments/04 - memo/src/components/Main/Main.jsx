import {DateText, MainContainer} from "./MainSection.styledcomp";
import TextArea from "./TextArea/TextArea";

const Main = () => {
  const CURRENTDATE = new Date();
  // console.log(CURRENTDATE);
  return (
    <MainContainer>
      <DateText>{`${CURRENTDATE.toLocaleString().slice(0, -3)}`}</DateText>
      <TextArea></TextArea>
    </MainContainer>
  );
};

export default Main;
