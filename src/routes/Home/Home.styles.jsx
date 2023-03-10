import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-image: ${(props) => props.theme.bgSoft};
`;

export const ChildContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: ${(props) => props.theme.bgSoft};
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;
