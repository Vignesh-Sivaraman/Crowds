import { Outlet } from "react-router-dom";
import NavbarContainer from "../../components/Navbar/NavbarContainer";
import { HomeContainer, ChildContainer } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <NavbarContainer></NavbarContainer>
      <ChildContainer>
        <Outlet />
      </ChildContainer>
    </HomeContainer>
  );
};

export default Home;
