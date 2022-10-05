import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Text, Button } from "react-native";

import { Container } from "./styles";

export function Diary() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Diary</Text>
    </Container>
  );
}
