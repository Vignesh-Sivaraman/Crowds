import {
  NavMain,
  NavContentContainer,
  NavLogo,
  NavUserLogo,
  NavTitle,
  NavLinks,
  NavUserTitle,
  NavLogout,
  NavUserContainer,
  NavBox,
} from "./NavbarContainer.styles";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import animationLogo from "../../assets/images/logo.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/userContext";
const NavbarContainer = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const { currentUser } = useContext(UserContext);
  return (
    <NavMain bg="white" expand="lg">
      <Container fluid>
        <NavLogo src={animationLogo} alt="logo" />
        <NavTitle>Crowds</NavTitle>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavBox className="me-auto">
            <NavContentContainer>
              <NavLinks to="/home">
                <HomeOutlinedIcon />
                <span className="nav-link">Home</span>
              </NavLinks>
              {theme ? (
                <NavLinks onClick={toggle}>
                  <DarkModeOutlinedIcon />
                  <span className="nav-link">Dark</span>
                </NavLinks>
              ) : (
                <NavLinks onClick={toggle}>
                  <LightModeOutlinedIcon />
                  <span className="nav-link">Light</span>
                </NavLinks>
              )}

              <NavLinks to="/home/activities">
                <NotificationsNoneOutlinedIcon />
                <span className="nav-link">Activity</span>
              </NavLinks>
            </NavContentContainer>
            <NavContentContainer>
              <NavUserContainer>
                <NavLinks to="/home/profile">
                  <NavUserLogo src={animationLogo} alt="userlogo" />
                  <NavUserTitle className="nav-link">
                    {currentUser.details.userName}
                  </NavUserTitle>
                </NavLinks>
              </NavUserContainer>
              <NavLogout>
                <span className="nav-link">Logout</span>
              </NavLogout>{" "}
            </NavContentContainer>
          </NavBox>
        </Navbar.Collapse>
      </Container>
    </NavMain>
  );
};

export default NavbarContainer;
