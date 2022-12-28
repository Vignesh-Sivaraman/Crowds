import styled from "styled-components";

export const UpdateUserMain = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  padding: 30px 30px;
  border-radius: 25px;
`;

export const UpdateUserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UpdateUserLabel = styled.h3`
  font-size: 1rem;
`;

export const UpdateUserInputBox = styled.div`
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0px 20px 0px;
  border-radius: 55px;

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    width: 100%;
    height: 55px;
    padding-left: 10px;
  }
`;

export const UpdateUserButton = styled.button`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;

  background-image: linear-gradient(
    to right,
    #2a5f8e,
    #245b8d,
    #1d578c,
    #16538a,
    #0f4f89,
    #0f4e87,
    #0e4d85,
    #0e4c83,
    #154d80,
    #1b4f7e,
    #21507b,
    #265178
  );
  color: #fff;
  text-transform: uppercase;
  margin: 10px 0;
  transition: 0.5s;
  &:hover {
    background-image: linear-gradient(
      to right,
      #0087ff,
      #007be8,
      #0070d1,
      #0064ba,
      #0059a4,
      #0059a4,
      #0059a4,
      #0059a4,
      #0064ba,
      #006fd1,
      #007be8,
      #0086ff
    );
    transform: scale(1.1);
  }
`;
