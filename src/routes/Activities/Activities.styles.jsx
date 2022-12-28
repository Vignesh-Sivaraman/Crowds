import styled from "styled-components";

export const ActivitiesMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;
`;

export const Activitiesbox = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border-radius: 25px;
`;
