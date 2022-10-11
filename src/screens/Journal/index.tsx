import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";

import { CaretLeft } from "phosphor-react-native";

import {
  Container,
  Title,
  Subtitle,
  SubtitleText,
  InputArea,
  Button,
  ButtonText,
} from "./styles";
import { PrimaryButton } from "@components/Button";
import { Profile } from "../Home";

export function Journal({}) {
  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params as Profile;

  const [text, setText] = useState<string>();
  const [saving, setSaving] = useState<boolean>(false);

  const firestore = getFirestore();

  function onGoBack() {
    navigation.goBack();
  }

  async function handleOnSave() {
    setSaving(true);

    // const docRef = doc(firestore, "users", `${id}`, "journal");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // }

    const usersRef = doc(firestore, "users", `${id}`);
    const journalRef = collection(usersRef, "journal");

    await addDoc(journalRef, {
      title: "O que aconteceu hoje?",
      content: text,
      timestamp: serverTimestamp(),
    });

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
          <SubtitleText>O que aconteceu hoje?</SubtitleText>
        </Subtitle>
        <InputArea
          placeholder="Clique aqui para escrever"
          selectionColor="#36006c"
          multiline
          numberOfLines={7}
          onChangeText={setText}
          value={text}
        />
        {/* <Text>1000 caracteres restantes</Text> */}
      </View>

      <Button onPress={handleOnSave} disabled={saving}>
        <ButtonText>Salvar</ButtonText>
      </Button>
    </Container>
  );
}
