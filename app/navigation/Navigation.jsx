// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import LoginScreenScreen from "../screens/Login/LoginScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
