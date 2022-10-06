import "react-native-gesture-handler";

import React, { useCallback } from "react";
import { Text, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import { ThemeProvider } from "styled-components/native";

import { Routes } from "./src/routes";

import theme from "./src/theme";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Hides splash screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} />
      <Routes />
    </ThemeProvider>
  );
}
