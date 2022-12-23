import {
  NavMain,
  NavLogo,
  NavUserLogo,
  NavTitle,
  NavLinks,
  NavUserTitle,
  NavLogout,
  NavUserContainer,
} from "./NavbarContainer.styles";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import animationLogo from "../../assets/images/logo.jpg";

const NavbarContainer = () => {
  const userName = "Vignesh";
  return (
    <NavMain bg="white" expand="lg">
      <Container>
        <NavLogo src={animationLogo} alt="logo" />
        <NavLinks to="/">
          <NavTitle>Crowds</NavTitle>
        </NavLinks>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinks to="/profile">
              <span className="nav-link">Profile</span>
            </NavLinks>
            <NavLinks to="/friends">
              <span className="nav-link">Friends</span>
            </NavLinks>
            <NavUserContainer>
              <NavUserLogo src={animationLogo} alt="userlogo" />
              <NavLinks>
                <NavUserTitle className="nav-link">{userName}</NavUserTitle>
              </NavLinks>
            </NavUserContainer>

            <NavLogout>
              <span className="nav-link">Logout</span>
            </NavLogout>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavMain>
  );
};

export default NavbarContainer;
