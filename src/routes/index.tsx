import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { Home } from "@screens/Home";
import { Player } from "@screens/Player";
import { Diary } from "@screens/Diary";

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
        <Screen name="Home" component={Home} />
        <Screen name="Player" component={Player} />
        <Screen name="Diary" component={Diary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}