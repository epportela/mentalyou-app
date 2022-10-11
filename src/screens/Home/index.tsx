import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { getDatabase, ref, child, get } from "firebase/database";

import {
  LoadingScreen,
  // ProfilePhoto,
  // MeetingCard,
  Spinner,
  Header,
  Container,
  // Card,
  BottomSheet,
  Greetings,
  UserName,
  ProfilePhoto,
  SecondaryHead,
  MeetingSchedule,
  ScheduleText1,
  ScheduleText2,
  MeetingScheduleButton,
  MeetingScheduleButtonText,
  SecondaryHeadText1,
  SecondaryHeadText2,
  ActionCards,
  ActionCard,
  CardContainer,
  CardContainerText1,
  CardContainerText2,
  // UserName,
} from "./styles";

interface Params {
  token: string;
}

export interface Profile {
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

const CARDS_DATA = [
  {
    id: 1,
    screenName: "Journal",
    title: "Escrita Terapêutica",
    subtitle: "Organize seus pensamentos num lugar livre de julgamentos.",
    backgroundPath: "../../assets/writing-background.jpg",
  },
  {
    id: 2,
    screenName: "Breathing",
    title: "Acalmar agora!",
    subtitle:
      "Crise de ansiedade? Clique aqui para fazer um exercício de respiração!",
    backgroundPath: "../../assets/breathing-background.jpg",
  },
  {
    id: 3,
    screenName: "Player",
    title: "Relaxar",
    subtitle: "Ouça sons de ambientes para diminuir a ansiedade.",
    backgroundPath: "../../assets/calm-background.jpg",
  },
];

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

  function handleNextScreen(screenName: string) {
    navigation.navigate(
      screenName as never,
      profile as never
      // { token: params.access_token } as never
    );
  }

  console.log("profile", profile);

  if (!profile) {
    return (
      <LoadingScreen>
        <Spinner size="large" color="#125566" />
      </LoadingScreen>
    );
  }

  const renderItem = ({ item }: any) => (
    <ActionCard
      resizeMode="cover"
      imageStyle={{ borderRadius: 15 }}
      source={
        require("../../assets/calm-background.jpg")
        //   () => {
        //   if (item.screenName === "Journal") {
        //     require("../../assets/writing-background.jpg");
        //   } else if (item.screenName === "Breathing") {
        //     require("../../assets/breathing-background.jpg");
        //   } else {
        //     require("../../assets/calm-background.jpg");
        //   }
        // }
      }
    >
      <CardContainer onPress={() => handleNextScreen(item.screenName)}>
        <CardContainerText1>{item.title}</CardContainerText1>
        <CardContainerText2>{item.subtitle}</CardContainerText2>
      </CardContainer>
    </ActionCard>
  );

  //   <Container>
  //   <Header
  //     resizeMode="cover"
  //     source={require("../../assets/home-header.jpg")}
  //   />
  //   <Card></Card>
  // </Container>

  return (
    <Container
      resizeMode="cover"
      source={require("../../assets/home-background.jpg")}
    >
      <View>
        <Header>
          <View>
            <Greetings>Olá,</Greetings>
            {/* <UserName>{`${profile.given_name ?? "tudo bem?"} ${ */}
            <UserName>{"Enzo Portela 👋"}</UserName>
          </View>
          <ProfilePhoto
            source={{
              uri: profile.picture,
            }}
          />
        </Header>

        <MeetingSchedule>
          <ScheduleText1>Precisando de ajuda?</ScheduleText1>
          <ScheduleText2>Agende uma consulta grátis!</ScheduleText2>
        </MeetingSchedule>

        <MeetingScheduleButton>
          <MeetingScheduleButtonText>
            Agendar consulta
          </MeetingScheduleButtonText>
        </MeetingScheduleButton>
      </View>

      <BottomSheet>
        <SecondaryHead>
          <SecondaryHeadText1>
            Que tal começar o dia com tranquilidade?
          </SecondaryHeadText1>
          <SecondaryHeadText2>
            Encontre conteúdos escolhidos com cuidado para você.
          </SecondaryHeadText2>
        </SecondaryHead>

        <ActionCards>
          <FlatList
            data={CARDS_DATA}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
          />
        </ActionCards>
      </BottomSheet>
    </Container>
  );
}
