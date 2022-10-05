import "react-native-gesture-handler";

import React, { useCallback } from "react";
import { Text, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";
import { SignIn } from "@screens/SignIn";
import { Routes } from "./src/routes";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} />
      <Routes />
      {/* <View
        onLayout={onLayoutRootView}
        // style={{ display: "flex" }}
      >
        <SignIn />
      </View> */}
      {/* <SignIn /> */}
    </ThemeProvider>
  );
}
