import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostFeedMain = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textColor};
  width: 75%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const PostFeedContainer = styled.div`
  padding: 20px;
`;

export const PostFeedUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostFeedUserInfo = styled.div`
  display: flex;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const PostFeedDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostFeedLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const PostFeedName = styled.span`
  font-weight: 500;
`;

export const PostFeedDate = styled.span`
  font-size: 12px;
`;

export const PostFeedContent = styled.div`
  margin: 20px 0px;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 500px;
  margin-top: 20px;
  object-fit: cover;
`;

export const PostFeedInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PostFeedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
`;
