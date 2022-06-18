import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import TicketsScreen from "../screens/Tickets/TicketsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import TabBar from "../components/TabBar/TabBar";

const Tab = createBottomTabNavigator();

/* Creating a bottom tab navigator. */
const BottomTabNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: "Inicio",
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="FavoritesScreen"
        options={{
          title: "Favoritos",
        }}
        component={FavoritesScreen}
      />
      <Tab.Screen
        name="TicketsScreen"
        options={{
          title: "Tickets",
        }}
        component={TicketsScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          title: "Perfil",
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
