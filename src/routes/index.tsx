import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { Home } from "@screens/Home";
import { Player } from "@screens/Player";
import { Journal } from "@screens/Journal";
import { Breathing } from "@screens/Breathing";

import OnboardingScreen from "@screens/Onboarding";

const { Navigator, Screen } = createStackNavigator();

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Onboarding" component={OnboardingScreen} />
        <Screen name="Home" component={Home} />
        <Screen name="Player" component={Player} />
        <Screen name="Journal" component={Journal} />
        <Screen name="Breathing" component={Breathing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
