import styled from "styled-components";

export const OnboardingContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right top,
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
`;

export const OnboardingBox = styled.div`
  width: 50%;
  min-height: 600px;
  border-radius: 10px;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  } ;
`;

export const OnboardingLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  flex-direction: column;
`;

export const OnboardingDirectionText = styled.h3`
  text-align: center;
  b {
    display: inline-block;
    color: #0d67b5;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  span {
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
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;

export const OnboardingRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OnboardingSeperator = styled.hr`
  height: 450px;
  width: 5px;
  margin-left: 10px;
  background-image: linear-gradient(
    to bottom,
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
  border-radius: 10px;
  border: none;
  @media (max-width: 768px) {
    height: 5px;
    width: 75%;
    margin: 10px 0px;
    background-image: linear-gradient(
      to right,
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
  } ;
`;

export const OnboardingForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const OnboardingInputBox = styled.div`
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0px 20px 0px;
  border-radius: 55px;

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    width: 100%;
    height: 55px;
    padding-left: 10px;
  }
`;

export const OnboardingLabel = styled.h3`
  span {
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
  }
  font-size: 1rem;
`;

export const OnboardingLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export const OnboardingButton = styled.button`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;

  background-image: linear-gradient(
    to right,
    #2a5f8e,
    #245b8d,
    #1d578c,
    #16538a,
    #0f4f89,
    #0f4e87,
    #0e4d85,
    #0e4c83,
    #154d80,
    #1b4f7e,
    #21507b,
    #265178
  );
  color: #fff;
  text-transform: uppercase;
  margin: 10px 0;
  transition: 0.5s;
  &:hover {
    background-image: linear-gradient(
      to right,
      #0087ff,
      #007be8,
      #0070d1,
      #0064ba,
      #0059a4,
      #0059a4,
      #0059a4,
      #0059a4,
      #0064ba,
      #006fd1,
      #007be8,
      #0086ff
    );
    transform: scale(1.1);
  }
`;
