import styled from "styled-components";

export const ChatBoxMain = styled.div`
  background: var(--cardColor);
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 14vh 60vh 13vh;
`;

export const ChatBoxHeader = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const ChatBoxFollower = styled.div``;

export const ChatBoxFollowerImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ChatBoxFollowerName = styled.div`
  font-size: 0.9rem;
`;

export const ChatBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  overflow: scroll;
`;

export const ChatBoxmessage = styled.div``;

export const ChatBoxSender = styled.div``;

export const ChatBoxSendButton = styled.div``;

export const ChatBoxEmptymsg = styled.div``;
