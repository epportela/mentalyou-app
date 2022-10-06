import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { View, Text, Button, ActivityIndicator } from "react-native";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { getDatabase, ref, child, get } from "firebase/database";

import { Container, Spinner } from "./styles";

interface Params {
  token: string;
}

interface Profile {
  id: string;
  name: string;
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  picture: string;
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

export function Home() {
  const [profile, setProfile] = useState<Profile>();

  const route = useRoute();
  const navigation = useNavigation();

  const { token } = route.params as Params;

  let myApp = initializeApp(firebaseConfig);

  const firestore = getFirestore(myApp);

  useEffect(() => {
    async function loadProfile() {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
      );

      const userInfo = await response.json();

      console.log("userInfo", userInfo);

      // await setDoc(doc(firestore, "characters", "mario"), {
      //   employment: "plumber",
      //   outfitColor: "red",
      //   specialAttack: "fireball",
      // });

      console.log("id", userInfo.id);

      const docRef = doc(firestore, "users", `${userInfo.id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        await setDoc(doc(firestore, "users", `${userInfo.id}`), {});
      }

      setProfile(userInfo);
    }

    loadProfile();
  }, []);

  function handleNextScreen() {
    navigation.navigate(
      "Journal" as never
      // { token: params.access_token } as never
    );
  }

  console.log("profile", profile);

  if (!profile) {
    return (
      <Container>
        <Spinner size="large" color="#36006c" />
      </Container>
    );
  }

  return (
    <Container>
      <Text>Home screen</Text>
      <Text>{`Bem-vindo ${profile.family_name}!`}</Text>
      <Button title="Journal" onPress={handleNextScreen} />
    </Container>
  );
}
