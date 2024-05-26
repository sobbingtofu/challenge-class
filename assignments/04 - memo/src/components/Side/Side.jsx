/* eslint-disable no-unused-vars */
import SideHeader from "./SideHeader/SideHeader";
import MemoList from "./MemoList/MemoList";
import {SideSection} from "./Side.StyledComp";
import {useEffect, useState} from "react";

const Side = () => {
  return (
    <SideSection>
      <SideHeader></SideHeader>
      <MemoList></MemoList>
    </SideSection>
  );
};

export default Side;
