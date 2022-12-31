import styled from "styled-components";

export const SuggestionsCardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const SuggestionsCardUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    font-weight: 500;
    color: "#000000";
  }
`;

export const SuggestionsCardButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;

    &:first-child {
      background-color: #5271ff;
    }

    &:last-child {
      background-color: #5271ff;
    }
  }
`;
