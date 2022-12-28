import styled from "styled-components";

export const ChatMain = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 0% 5%;
  @media (max-width: 768px) {
    grid-template-columns: 16% auto;
  }
`;

export const ChatLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textColor};
  border-radius: 1rem;
  padding: 1rem;
  height: auto;
  min-height: 80vh;
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChatRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
