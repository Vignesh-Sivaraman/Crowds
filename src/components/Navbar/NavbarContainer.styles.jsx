import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavMain = styled(Navbar)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: ${(props) => props.theme.bg} !important;
  color: ${(props) => props.theme.textColor} !important;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const NavBox = styled(Nav)`
  display: flex;
  justify-content: space-between !important;
  margin: 0 !important;
  width: 100%;
`;

export const NavContentContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 10px;
  }
`;

export const NavLogo = styled.img`
  width: 75px;
  height: 75px;
  /* border-radius: 50%; */
  margin-right: 2rem;
  object-fit: contain;
`;

export const NavUserLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0rem 0rem 0rem 1rem;
  object-fit: contain;
  @media (max-width: 768px) {
    margin: 0rem 1rem 0rem 0rem;
  }
`;

export const NavTitle = styled(Navbar.Brand)`
  cursor: default;
  font-weight: bold;
  background-image: ${(props) => props.theme.bgImage};
  -webkit-background-clip: text;
  color: transparent;
  &:hover {
    background-image: ${(props) => props.theme.bgImage};
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const NavUserContainer = styled.div`
  display: flex;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  span {
    background-image: ${(props) => props.theme.bgImage};
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    padding-left: 3px !important;
    &:hover {
      background-image: ${(props) => props.theme.bgImage};
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

export const NavUserTitle = styled.span`
  background-image: ${(props) => props.theme.bgImage};
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  font-style: oblique;
  &:hover {
    background-image: ${(props) => props.theme.bgImage};
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const NavLogout = styled.span`
  text-decoration: none;
  span {
    font-weight: bold;
    cursor: pointer;
    background-image: ${(props) => props.theme.bgImage};
    -webkit-background-clip: text;
    color: transparent;

    &:hover {
      background-image: ${(props) => props.theme.bgImage};
      -webkit-background-clip: text;
      color: transparent;
      transform: scale(1.1);
    }
  }
`;
