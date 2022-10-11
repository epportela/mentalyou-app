import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

// import SlideOne from "../../assets/Onboarding/slide01.svg";
// import SlideTwo from "../../assets/Onboarding/slide02.svg";
// import SlideThree from "../../assets/Onboarding/slide03.svg";
// import SlideFour from "../../assets/Onboarding/slide04.svg";

interface Params {
  token: string;
}

const slides = [
  {
    id: "1",
    vector: <Text></Text>,
    title: "Escrita Terapêutica",
    subtitle: "Organize seus pensamentos num lugar livre de julgamentos.",
  },
  {
    id: "2",
    vector: <Text></Text>,
    title: "Acalmar agora!",
    subtitle:  "Crise de ansiedade? Clique aqui para fazer um exercício de respiração!",
  },
  {
    id: "3",
    vector: <Text></Text>,
    title: "Relaxar",
    subtitle: "Ouça sons de ambientes para diminuir a ansiedade.",
  },
];

const Slide = ({ item }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width,
      }}
    >
      {item.vector}
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({}: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const route = useRoute();
  const navigation = useNavigation();

  const { token } = route.params as Params;

  const ref = useRef<FlatList>(null);
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}
    >
      {/* <StatusBar barStyle="dark-content" backgroundColor="#FFF" /> */}
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        // contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />

      <View style={{ flexDirection: "row", padding: 10 }}>
        {currentSlideIndex !== 3 && (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btn,
                {
                  borderColor: "#36006c",
                  borderWidth: 1,
                  backgroundColor: "transparent",
                },
              ]}
              onPress={skip}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#36006c",
                }}
              >
                Pular
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToNextSlide}
              style={styles.btn}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Próximo
              </Text>
            </TouchableOpacity>
          </>
        )}
        {currentSlideIndex === 3 && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Home" as never, { token } as never)
            }
            style={styles.btn}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "#fff",
              }}
            >
              Explorar
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#252424",
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "#252424",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#36006c",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
