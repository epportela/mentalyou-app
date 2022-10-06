import { useEffect } from "react";

import { Text, Button, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as AuthSession from "expo-auth-session";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

import {
  Container,
  HeaderText,
  GoogleAuthButton,
  ButtonText,
  Background,
  Content,
} from "./styles";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthResponse {
  type: string;
  params: {
    access_token: string;
  };
}

const { FIREBASE_API_KEY } = process.env;
const { FIREBASE_AUTH_DOMAIN } = process.env;
const { FIREBASE_PROJECT_ID } = process.env;
const { FIREBASE_STORAGE_BUCKETt } = process.env;
const { FIREBASE_MESSAGING_SENDER_ID } = process.env;
const { FIREBASE_APP_ID } = process.env;
const { FIREBASE_MEASUREMENT_ID } = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKETt,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

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
      // const auth = getAuth();

      // const credential = GoogleAuthProvider.credential(null, params.access_token);

      // console.log("credential", credential);
      // const result = await signInWithCredential(auth, credential);

      // console.log("###RESULT###", result);

      navigation.navigate(
        "Home" as never,
        { token: params.access_token } as never
      );
    }
  }

  return (
    <Background
      resizeMode="cover"
      source={require("../../assets/background-login.png")}
    >
      <Content>
        <HeaderText>Olá!</HeaderText>
        <GoogleAuthButton onPress={handleSignIn}>
          <ButtonText>Entrar com o Google</ButtonText>
        </GoogleAuthButton>
      </Content>
    </Background>
  );
}
