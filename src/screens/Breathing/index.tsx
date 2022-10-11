import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { CaretLeft } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  StartButton,
  Button,
  ButtonText,
  Animation,
} from "./styles";

export function Breathing() {
  const animation = useRef<any>(null);
  const navigation = useNavigation();

  const [animating, setAnimating] = useState(false);

  function onGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <TouchableOpacity onPress={onGoBack}>
        <CaretLeft size={32} />
      </TouchableOpacity>

      <View>
        <Animation
          autoPlay={false}
          ref={animation}
          style={{
            width: 300,
            height: 300,
          }}
          source={require("../../assets/Lottie/breathing-exercice.json")}
        />
      </View>

      <Button
        onPress={() => {
          animation.current?.reset();
          animation.current?.play();
          setAnimating((prevState) => !prevState);
        }}
      >
        <ButtonText>{animating ? "Aguarde..." : "Iniciar"}</ButtonText>
      </Button>
    </Container>
  );
}
