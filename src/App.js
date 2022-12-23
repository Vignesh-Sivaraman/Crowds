import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PostFeeds from "./components/PostFeeds/PostFeeds";
import Home from "./routes/Home/Home";
import LoginPage from "./routes/LoginPage/LoginPage";
import Profile from "./routes/Profile/Profile";
import RegisterPage from "./routes/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PostFeeds />} />
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
