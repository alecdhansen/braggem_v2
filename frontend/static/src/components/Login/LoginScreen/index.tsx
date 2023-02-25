import { Link } from "react-router-dom";
import {
  H3,
  H5,
  LoginContainer,
  LowerContainer,
  MainContainer,
  QuestionContainer,
  QuickAccessContainer,
  RegisterContainer,
} from "./style";
import AppLogin from "../AppLogin";

const LoginScreen = () => {
  return (
    <>
      <MainContainer>
        <LoginContainer>
          <AppLogin />
          <RegisterContainer>
            <QuestionContainer>Don't have an account?</QuestionContainer>
            <Link to="register" style={{ textDecoration: "none" }}>
              Sign up
            </Link>
          </RegisterContainer>
          {/* <TwitterLogin /> */}
        </LoginContainer>
        <LowerContainer>
          <QuickAccessContainer>
            <H3>For quick access</H3>
            <H5>Username - Alec</H5>
            <H5>Password - safepass1</H5>
          </QuickAccessContainer>
        </LowerContainer>
      </MainContainer>
    </>
  );
};

export default LoginScreen;
