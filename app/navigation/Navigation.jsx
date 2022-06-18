// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import CreateScreen from "../screens/Account/Create/CreateScreen";
import LoginScreen from "../screens/Account/Login/LoginScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

/**
 * The AppNavigation function returns a NavigationContainer component that contains a Stack.Navigator
 * component that contains a Stack.Screen component for each screen in the app
 * @returns A navigation container with a stack navigator.
 */
const AppNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CreateScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
