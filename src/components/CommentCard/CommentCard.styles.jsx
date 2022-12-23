import styled from "styled-components";

export const CommentCardMain = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const CommentCardInfo = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;

  span {
    font-weight: 500;
  }

  p {
    color: themed("textColorSoft");
  }
`;

export const CommentCardDate = styled.div`
  flex: 1;
  align-self: center;
  color: gray;
  font-size: 12px;
`;
