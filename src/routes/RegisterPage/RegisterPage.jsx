import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/animations/87300-redes-sociales-publico.json";
import animationLogo from "../../assets/images/logo.jpg";
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
} from "../LoginPage/LoginPage.styles";
import { crowdServer } from "../../config/axios";

const animationStyle = {
  height: "100%",
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const moveTopage = (url) => {
    navigate(url);
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      city: "",
    },
    onSubmit: async (values) => {
      try {
        let user = await crowdServer.post("auth/register", values);
        if (user.status === 200) {
          moveTopage("/");
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
            <span>Already a member? </span>
            <b onClick={() => moveTopage("/")}>Login here!</b>
          </OnboardingDirectionText>
        </OnboardingLeftContainer>
        <OnboardingSeperator />
        <OnboardingRightContainer>
          <OnboardingLogo src={animationLogo} alt="logo" />
          <OnboardingForm onSubmit={formik.handleSubmit}>
            <OnboardingLabel>
              <span>Name</span>
            </OnboardingLabel>
            <OnboardingInputBox>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
            </OnboardingInputBox>
            <OnboardingLabel>
              {" "}
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
            <OnboardingLabel>
              <span>City</span>
            </OnboardingLabel>
            <OnboardingInputBox>
              <input
                type="text"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                required
              />
            </OnboardingInputBox>
            <OnboardingButton type="submit">Register</OnboardingButton>
          </OnboardingForm>
        </OnboardingRightContainer>
      </OnboardingBox>
    </OnboardingContainer>
  );
};

export default RegisterPage;
