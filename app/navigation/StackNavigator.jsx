import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import LoginScreen from "../screens/Account/Login/LoginScreen";
import CreateScreen from "../screens/Account/Create/CreateScreen";

import SettingsScreen from "../screens/Settings/SettingsScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SettingsStackNavigator };
