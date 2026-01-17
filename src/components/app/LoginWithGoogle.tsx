"use client";

import { Button, Text } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { TbBrandGoogleFilled } from "react-icons/tb";

const LoginWithGoogle = () => {
  const login = useGoogleLogin({
    flow: "implicit",
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
    },
    onError: (err) => {},
  });

  const handleLogin = () => login();

  return (
    <>
      <Button onClick={handleLogin}>
        <TbBrandGoogleFilled />
        <Text>Login with Google</Text>
      </Button>
    </>
  );
};

export default LoginWithGoogle;
