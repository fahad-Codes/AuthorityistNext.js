import React, { useState } from "react";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import AppLogoTitle from "../AppLogoTitle";
import Button from "../Button";
import {
  Container,
  Form,
  FormTitle,
  InfoText,
  InfoTextContainer,
  Link,
} from "./FormElements";
import InputFeild from "./InputFeild";
import { InputError } from "../../types/error";
import { useRouter } from "next/router";
import { getErrorMsg, loginUser } from "../../helpers";
import SocialButton from "../SocialButton";
import GoogleImage from "../../public/assets/images/google.svg";
import { signIn } from "next-auth/react";
import { AxiosError } from "axios";
import { ErrorText } from "./InputFeildElements";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      const loginRes = await loginUser({ email, password });

      if (loginRes && !loginRes.ok) {
        setSubmitError(loginRes.error || "");
      } else {
        router.push("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }

    setLoading(false);
  };

  const handleGoogleSignIn = (event: React.FormEvent<Element>) => {
    event.preventDefault();

    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <FormTitle> Login </FormTitle>

        <InputFeild
          placeholder="Email"
          type="email"
          icon={<AiOutlineMail />}
          value={email}
          onChange={handleEmailChange}
          required
        />

        <InputFeild
          placeholder="Password"
          type="password"
          icon={<AiOutlineUnlock />}
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <Link href="/forgot-password">Forgot Password?</Link>

        <Button type="submit" title="Login" disabled={loading} />

        {submitError && <ErrorText>{submitError}</ErrorText>}

        <SocialButton
          title={"Login with Google"}
          icon={GoogleImage}
          onClick={handleGoogleSignIn}
        />

        <InfoTextContainer>
          <InfoText>New User?</InfoText>

          <Link href="/signup">Create an Account</Link>
        </InfoTextContainer>
      </Form>
    </Container>
  );
};

export default LoginForm;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
