import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { handleError } from "../../../utils";
//npm
import Cookies from "js-cookie";
//React Icons
import { MdArrowBackIosNew } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  ErrorContainer,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  RegisterForm,
} from "./style";
import { SubmitButton } from "../utils";

const Register = () => {
  const { login }: any = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const options = {
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
    if (!response.ok) {
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
      <main className="mainloginscreenregister">
        <button
          className="registergobackbtn"
          onClick={() => {
            window.history.back();
          }}
        >
          <MdArrowBackIosNew />
        </button>
        <div className="loginbox col-md-4 offset-md-4 col-10 offset-1">
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
        </div>
      </main>
    </>
  );
};
export default Register;
