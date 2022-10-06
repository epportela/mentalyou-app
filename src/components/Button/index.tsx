import React from "react";

import { Text } from "react-native";

import { Button, ButtonText } from "./styles";

interface IButton {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

export function PrimaryButton({ text, disabled = false, onPress }: IButton) {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
