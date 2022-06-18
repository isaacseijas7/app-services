import { createDrawerNavigator } from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import React from "react";
import { useWindowDimensions } from "react-native";
import CustomSidebarMenu from "../components/CustomSidebarMenu/CustomSidebarMenu";
import MyHeader from "../components/MyHeader/MyHeader";
import { SettingsStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";


const Drawer = createDrawerNavigator();

/**
 * It returns a Drawer.Navigator component that has a drawerContent prop that is a function that
 * returns a CustomSidebarMenu component
 * @returns A Drawer.Navigator component with a drawerContent prop that is a function that returns a
 * CustomSidebarMenu component.
 */
const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        drawerType: "front",
        drawerHideStatusBarOnOpen: true,
        gestureEnabled: true,
        drawerStyle: {
          backgroundColor: "#fff",
        },
        drawerPosition: "right",
        title: "App Services",
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
        drawerHideStatusBarOnOpen: true,
        gestureEnabled: true,
        // overlayColor: 'transparent',
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return <MyHeader title={title} style={options.headerStyle} />;
        },
        headerStyle: {
          height: 55,
        },
      }}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen
        name="SettingsStackNavigator"
        options={{
          title: "Configuraciones",
        }}
        component={SettingsStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
