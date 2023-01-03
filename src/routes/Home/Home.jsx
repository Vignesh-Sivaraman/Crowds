import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarContainer from "../../components/Navbar/NavbarContainer";
import { UserContext } from "../../context/userContext";
import { HomeContainer, ChildContainer } from "./Home.styles";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    currentUser && (
      <HomeContainer>
        <NavbarContainer></NavbarContainer>
        <ChildContainer>
          <Outlet />
        </ChildContainer>
      </HomeContainer>
    )
  );
};

export default Home;
