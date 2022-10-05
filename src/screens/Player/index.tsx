import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Text, Button } from "react-native";

import { Card, Container } from "./styles";

export function Player() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <Container>
      <Card>
        <Text>Player</Text>
      </Card>
    </Container>
  );
}
