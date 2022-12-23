import styled from "styled-components";

export const CommentsMain = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CommentsWrite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0px;
  input {
    flex: 5;
    padding: 10px;
    border: 1px solid themed("border");
    background-color: transparent;
    color: themed("textColor");
  }

  button {
    border: none;
    background-color: #5271ff;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
  }
`;
