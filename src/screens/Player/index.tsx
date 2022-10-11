import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Text, Button } from "react-native";

import { Audio } from "expo-av";

import { Card, Container } from "./styles";

const SOUNDS = [
  {
    name: "Chuva Forte",
    uri: "https://cdn.pixabay.com/audio/2022/02/07/audio_1393bdaae1.mp3",
  },
  {
    name: "Pássaros Cantando",
    uri: "https://cdn.pixabay.com/audio/2021/09/06/audio_be441bfa5a.mp3",
  },
  {
    name: "Praia Deserta",
    uri: "https://cdn.pixabay.com/audio/2021/08/09/audio_165a149ae7.mp3",
  },
];

export function Player() {
  const route = useRoute();
  const navigation = useNavigation();

  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri: "https://cdn.pixabay.com/audio/2022/02/07/audio_1393bdaae1.mp3" },
      { shouldPlay: true }
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function stopSound() {
    return sound && sound.unloadAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Container>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </Container>
  );
}
