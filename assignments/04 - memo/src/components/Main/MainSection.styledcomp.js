import styled from "styled-components";

export const DateText = styled.p`
  text-align: center;
`;

export const MainContainer = styled.div`
  background-color: rgba(127, 255, 212, 0.5);
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: stretch;
  padding: 2%;
  border-radius: 15px;
`;

export const MemoInputSection = styled.textarea`
  border-style: none;
  /* background-color: red; */
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  flex-basis: 100%;
  font-size: 16pt;
  resize: none;
  padding: 2%;
`;
