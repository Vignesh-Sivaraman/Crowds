import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PostFeeds from "./components/PostFeeds/PostFeeds";
import Home from "./routes/Home/Home";
import LoginPage from "./routes/LoginPage/LoginPage";
import Profile from "./routes/Profile/Profile";
import RegisterPage from "./routes/RegisterPage/RegisterPage";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Dark, Light } from "./Themes";
import Activities from "./routes/Activities/Activities";
import Chat from "./routes/Chat/Chat";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme ? Light : Dark}>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<PostFeeds />} />
          <Route path="profile/:Id" element={<Profile />} />
          <Route path="activities" element={<Activities />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
