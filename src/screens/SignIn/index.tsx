import { useEffect } from "react";

import { Text, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as AuthSession from "expo-auth-session";

import { Container, HeaderText, GoogleAuthButton } from "./styles";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthResponse {
  type: string;
  params: {
    access_token: string;
  };
}

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;

    if (type === "success") {
      navigation.navigate(
        "Home" as never,
        { token: params.access_token } as never
      );
    }
  }

  return (
    <Container>
      <HeaderText>Olá!</HeaderText>
      {/* <Button title="Entrar com o Google" onPress={handleSignIn} /> */}
      <GoogleAuthButton onPress={handleSignIn}>
        <Text>Entrar com o Google</Text>
      </GoogleAuthButton>
    </Container>
  );
}
