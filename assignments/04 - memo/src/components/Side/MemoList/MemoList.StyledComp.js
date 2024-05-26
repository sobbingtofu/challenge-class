import styled from "styled-components";

export const MemoContainer = styled.section`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  .item {
    flex: 0 0 auto;
  }
  padding: 0px 4px;
`;

export const MemoItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 4%;
  border-radius: 5px;
`;

export const SelectedMemoItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 4%;
  border-radius: 10px;
  background-color: rgba(127, 255, 212, 0.5);
`;

export const MemoTitle = styled.p`
  padding: 3% 0%;
  font-weight: 700;
`;

export const MemoTime = styled.p`
  /* margin-top: 5%; */
  padding: 5% 0%;
  font-size: 0.9rem;
`;
