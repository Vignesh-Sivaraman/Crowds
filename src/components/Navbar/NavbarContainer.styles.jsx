import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavMain = styled(Navbar)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const NavLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 2rem;
  object-fit: cover;
`;

export const NavUserLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0rem 0rem 0rem 1rem;
  object-fit: cover;
  @media (max-width: 768px) {
    margin: 0rem 1rem 0rem 0rem;
  }
`;

export const NavTitle = styled(Navbar.Brand)`
  font-weight: bold;
  background-image: linear-gradient(
    to right bottom,
    #4392d8,
    #387ebd,
    #2e6ba2,
    #235989,
    #194770,
    #1e4a72,
    #224c75,
    #264f77,
    #396895,
    #4c81b5,
    #609cd5,
    #73b8f6
  );
  -webkit-background-clip: text;
  color: transparent;
`;

export const NavUserContainer = styled.div`
  display: flex;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;

  span {
    color: #214c75;
    font-weight: bold;
  }
`;

export const NavUserTitle = styled.span`
  color: #453c67 !important;
  font-weight: bold;
  font-style: oblique;
`;

export const NavLogout = styled(Link)`
  text-decoration: none;
  span {
    font-weight: bold;
    cursor: pointer;
    background-image: linear-gradient(
      to left bottom,
      #51c8fe,
      #42b4eb,
      #32a1d7,
      #208ec4,
      #057bb1
    );
    -webkit-background-clip: text;
    color: transparent;

    &:hover {
      background-image: linear-gradient(
        to left bottom,
        #51c8fe,
        #42b4eb,
        #32a1d7,
        #208ec4,
        #057bb1
      );
      -webkit-background-clip: text;
      color: transparent;
      transform: scale(1.1);
    }
  }
`;
