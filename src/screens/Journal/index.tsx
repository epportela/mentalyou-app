import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";

import { CaretLeft } from "phosphor-react-native";

import { Container, Title, Subtitle, InputArea } from "./styles";
import { PrimaryButton } from "@components/Button";

export function Journal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [text, setText] = useState<string>();
  const [saving, setSaving] = useState<boolean>(false);

  function onGoBack() {
    navigation.goBack();
  }

  function handleOnSave() {
    setSaving(true);
    console.log("saving...");

    setSaving(false);
    onGoBack();
  }

  return (
    <Container>
      <View>
        <TouchableOpacity onPress={onGoBack}>
          <CaretLeft size={32} />
        </TouchableOpacity>
        <Title>Organize sua mente</Title>
        <Subtitle>
          <Text>O que aconteceu hoje?</Text>
        </Subtitle>
        <InputArea
          placeholder="Clique aqui para escrever"
          selectionColor="#36006c"
          multiline
          numberOfLines={6}
          onChange={(value: string) => setText(value)}
          value={text}
        />
        <Text>1000 caracteres restantes</Text>
      </View>

      <PrimaryButton text="Salvar" onPress={handleOnSave} disabled={saving} />
    </Container>
  );
}
