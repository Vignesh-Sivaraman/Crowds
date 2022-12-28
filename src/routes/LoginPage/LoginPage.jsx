import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/animations/72342-welcome.json";
import animationLogo from "../../assets/images/logo.png";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import {
  OnboardingBox,
  OnboardingContainer,
  OnboardingLeftContainer,
  OnboardingRightContainer,
  OnboardingSeperator,
  OnboardingForm,
  OnboardingInputBox,
  OnboardingLabel,
  OnboardingLogo,
  OnboardingButton,
  OnboardingDirectionText,
} from "./LoginPage.styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { crowdServer } from "../../config/axios";

const animationStyle = {
  height: "100%",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const moveTopage = (url) => {
    navigate(url);
  };
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let user = await crowdServer.post("auth/login", values);
        if (user.status === 200) {
          setCurrentUser(user.data);
          moveTopage("/home");
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <OnboardingContainer>
      <OnboardingBox>
        <OnboardingLeftContainer>
          <Lottie
            animationData={welcomeAnimation}
            loop={true}
            style={animationStyle}
          />
          <OnboardingDirectionText>
            <span>New to the community? </span>
            <b onClick={() => moveTopage("/register")}>Register here!</b>
          </OnboardingDirectionText>
        </OnboardingLeftContainer>
        <OnboardingSeperator />
        <OnboardingRightContainer>
          <OnboardingLogo src={animationLogo} alt="logo" />
          <OnboardingForm onSubmit={formik.handleSubmit}>
            <OnboardingLabel>
              <span>Email</span>
            </OnboardingLabel>
            <OnboardingInputBox>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
            </OnboardingInputBox>
            <OnboardingLabel>
              <span>Password</span>
            </OnboardingLabel>
            <OnboardingInputBox>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required
              />
            </OnboardingInputBox>
            <OnboardingButton type="submit">Login</OnboardingButton>
          </OnboardingForm>
        </OnboardingRightContainer>
      </OnboardingBox>
    </OnboardingContainer>
  );
};

export default LoginPage;
