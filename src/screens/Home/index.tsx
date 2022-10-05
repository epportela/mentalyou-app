import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Text, Button } from "react-native";

import { Container } from "./styles";

interface Params {
  token: string;
}

interface Profile {
  name: string;
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  picture: string;
}

export function Home() {
  const [profile, setProfile] = useState({} as Profile);

  const route = useRoute();
  const navigation = useNavigation();

  const { token } = route.params as Params;

  useEffect(() => {
    async function loadProfile() {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
      );

      const userInfo = await response.json();

      setProfile(userInfo);
    }

    loadProfile();
  }, []);

  function handleNextScreen() {
    navigation.navigate(
      "Player" as never
      // { token: params.access_token } as never
    );
  }

  return (
    <Container>
      <Text>Home screen</Text>
      <Text>{`Bem-vindo ${profile.family_name}!`}</Text>
      <Button title="Player" onPress={handleNextScreen} />
    </Container>
  );
}
