import styled from "styled-components";

export const NewPostMain = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textColor};
  width: 75%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const NewPostContainer = styled.div`
  padding: 20px;
  hr {
    margin: 20px 0px;
    border: none;
    height: 0.5px;
    background-color: themed("border");
  }
`;

export const NewPostTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  input {
    border: none;
    outline: none;
    padding: 20px 10px;
    background-color: transparent;
    width: 60%;
    color: themed("textColor");
  }
`;

export const NewPostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewPostLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NewPostItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    height: 20px;
  }

  input {
    border: none;
    outline: none;
    padding: 0px 10px;
    background-color: transparent;
    width: 100%;
    color: themed("textColor");
  }

  span {
    font-size: 12px;
    color: gray;
    width: 150px;
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const NewPostRight = styled.div`
  button {
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;
    background-color: #5271ff;
    border-radius: 3px;
    @media (max-width: 480px) {
      font-size: 0.75em;
      margin-left: 10px;
    }
  }
`;
