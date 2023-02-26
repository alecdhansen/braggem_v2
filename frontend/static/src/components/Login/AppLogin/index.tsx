import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { handleError } from "../../../utils";
import Cookies from "js-cookie";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  ErrorContainer,
  FormControl,
  FormGroup,
  FormLabel,
  LoginForm,
} from "./style";
import { SubmitButton } from "../utils";
import { OptionsProps } from "../../../types";

const AppLogin = () => {
  const { login }: any = useAuth();
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError]: any = useState();

  const handleUsernameInput = (e: any) => {
    const value = e.target.value;
    setUser((prevState) => ({ ...prevState, username: value }));
  };

  const handlePasswordInput = (e: any) => {
    const value = e.target.value;
    setUser((prevState) => ({ ...prevState, password: value }));
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
    const response: any = await fetch("/dj-rest-auth/login/", options).catch(
      handleError
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data);
      throw new Error("Uh oh. Something went wrong. Check your network tab!");
    } else {
      Cookies.set("Authorization", `Token ${data.key}`);
      delete data.key;
      login(data);
    }
  };
  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <FormGroup controlId="username">
          <FormLabel>Username</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter username"
            value={user.username}
            onChange={handleUsernameInput}
            name="username"
            required
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Password..."
            value={user.password}
            onChange={handlePasswordInput}
            name="password"
            required
          />
        </FormGroup>
        {error &&
          error?.non_field_errors?.map((error: string) => {
            return (
              <ErrorContainer>
                <RiErrorWarningFill style={{ marginRight: "3px" }} />
                {error}
              </ErrorContainer>
            );
          })}
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </>
  );
};
export default AppLogin;
