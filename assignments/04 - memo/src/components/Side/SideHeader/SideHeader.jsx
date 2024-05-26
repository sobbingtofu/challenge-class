import AddNewMemo from "./AddNewMemo/AddNewMemo";
import DeleteMemo from "./DeleteMemo/DeleteMemo";
import {SideHeaderContainer} from "./SideHeaderContainer";

const SideHeader = () => {
  return (
    <>
      <SideHeaderContainer>
        <AddNewMemo />
        <DeleteMemo />
      </SideHeaderContainer>
    </>
  );
};

export default SideHeader;
