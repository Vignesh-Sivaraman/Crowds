import styled from "styled-components";

export const ChatBoxMain = styled.div`
  background-color: ${(props) => props.theme.bg};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
`;

export const ChatBoxHeader = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const ChatBoxFollower = styled.div`
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  div {
    display: flex;
    align-items: center;
  }
`;

export const ChatBoxFollowerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
`;

export const ChatBoxFollowerName = styled.div`
  font-size: 1.25rem;
  margin-left: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const ChatBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatBoxmessage = styled.div`
  color: #000;
  padding: 0.7rem;
  border-radius: 1rem 1rem 1rem 0;
  max-width: 28rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: linear-gradient(to right, #a8ff78, #78ffd6);
  span {
    &:nth-child(2) {
      font-size: 0.7rem;
      align-self: end;
    }
  }
`;

export const ChatBoxmessageOwn = styled.div`
  color: #000;
  padding: 0.7rem;
  border-radius: 1rem 1rem 1rem 0;
  max-width: 28rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: flex-end;
  border-radius: 1rem 1rem 0 1rem;
  background: linear-gradient(98.63deg, #24e4f0 0%, #358ff9 100%);
  span {
    &:nth-child(2) {
      font-size: 0.7rem;
      align-self: end;
    }
  }
`;

export const ChatBoxSender = styled.form`
  margin-top: 25px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  border-radius: 1rem;
  align-self: end;
  input {
    height: 70%;
    background-color: white;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
    padding: 0px 15px 0px 15px;
    height: 3.5rem;
  }
`;

export const ChatBoxSendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #8a2387, #e94057, #f27121);
  padding: 5px;

  &:hover {
    color: #fca61f;
    border: 2px solid #fca61f;
    cursor: pointer;
    background: transparent;
  }
`;

export const ChatBoxEmptymsg = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;
