import styled from "styled-components";

export const ConversationMain = styled.div`
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  &:hover {
    background: #80808038;
    cursor: pointer;
  }
  div {
    position: relative;
    display: flex;
    align-items: center;
  }
`;

export const ConversationName = styled.div`
  padding-left: 10px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ConversationOnlineDot = styled.div`
  background-color: greenyellow;
  border-radius: 50%;
  position: relative;
  left: 3rem;
  bottom: 1rem;
  width: 1rem;
  height: 1rem;
`;

export const ConversationFollowImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
`;
