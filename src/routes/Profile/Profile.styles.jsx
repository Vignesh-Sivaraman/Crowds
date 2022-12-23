import styled from "styled-components";

export const ProfileMain = styled.div`
  background-color: #f6f3f3;
  width: 75%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const ProfileImages = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

export const ProfileCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 200px;
`;

export const ProfileContainer = styled.div`
  padding: 20px 70px;
  @media (max-width: 480px) {
    padding: 10px;
  }
  @media (max-width: 960px) {
    padding: 20px;
  } ;
`;

export const ProfileUserInfo = styled.div`
  height: 180px;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: white;
  color: #000;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    height: 30vh;
    padding: 20px;
    margin-top: 100px;
  } ;
`;

export const ProfileUserCenter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 30px;
    font-weight: 500;
  }
  button {
    border: none;
    background-color: #5271ff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ProfileUserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: themed("textColorSoft");

  span {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    margin: 10px 10px;
  } ;
`;
