import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { handleError } from "../../../utils";
import Cookies from "js-cookie";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  ErrorContainer,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  GoBackButton,
  LoginContainer,
  RegisterContainer,
  RegisterForm,
} from "./style";
import { SubmitButton } from "../utils";
import { OptionsProps } from "../types";

const Register = () => {
  const { login }: any = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState();

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const options: OptionsProps = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(user),
    };

    const response = await fetch("/dj-rest-auth/registration/", options).catch(
      handleError
    );
    const data = await response.json();
    if (!response) {
      setError(data);
      throw new Error("Uh oh. Something went wrong. Check your network tab!");
    } else {
      Cookies.set("Authorization", `Token ${data.key}`);
      login(data);
      navigate("/home/games/");
    }
  };
  return (
    <>
      <RegisterContainer>
        <GoBackButton
          onClick={() => {
            window.history.back();
          }}
        >
          <MdArrowBackIosNew />
        </GoBackButton>
        <LoginContainer>
          <RegisterForm onSubmit={handleSubmit}>
            <FormGroup controlId="username">
              <FormLabel>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                value={user.username}
                onChange={handleInput}
                name="username"
                required
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormLabel>Email address</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleInput}
                name="email"
                required
              />
              <FormText>
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup controlId="password1">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                value={user.password1}
                onChange={handleInput}
                required
                name="password1"
              />
            </FormGroup>
            <FormGroup controlId="password2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Confirm Password"
                value={user.password2}
                onChange={handleInput}
                required
                name="password2"
              />
            </FormGroup>
            {error &&
              error?.password1?.map((error: any) => {
                return (
                  <ErrorContainer>
                    <RiErrorWarningFill
                      style={{ marginRight: "3px", fontSize: "12px" }}
                    />
                    {error}
                  </ErrorContainer>
                );
              })}
            {error &&
              error?.non_field_errors?.map((error: any) => {
                return (
                  <ErrorContainer>
                    <RiErrorWarningFill
                      style={{ marginRight: "3px", fontSize: "12px" }}
                    />
                    {error}
                  </ErrorContainer>
                );
              })}
            <SubmitButton type="submit">Submit</SubmitButton>
          </RegisterForm>
        </LoginContainer>
      </RegisterContainer>
    </>
  );
};
export default Register;
