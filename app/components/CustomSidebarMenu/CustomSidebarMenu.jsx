import { FontAwesome5 } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Heading, Pressable, Text, View } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./../../core/theme";

/* This is a custom sidebar menu for the drawer navigator. */
const CustomSidebarMenu = (props) => {
  const { navigation, state } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        w="100%"
        height={20}
        flexDirection="row"
        justifyContent={"center"}
        alignItems="center"
        backgroundColor={"primary.600"}
      >
        <Heading size={"sm"} color="white">
          App Services
        </Heading>
      </View>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}

        <Pressable
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate("TabNavigator");
          }}
          flexDirection="row"
          paddingX={4}
          paddingY={4}
          style={{
            cursor: "pointer",
          }}
          W={"100%"}
        >
          <Text
            color={state?.index === 0 ? "primary.600" : "black"}
            fontSize="md"
            flex={1}
          >
            Inicio
          </Text>
          <MaterialIcons
            name="dashboard"
            size={20}
            style={{
              color: state?.index === 0 ? colors.primary["600"] : "black",
              marginRight: 10,
            }}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate("SettingsStackNavigator");
          }}
          flexDirection="row"
          paddingX={4}
          paddingY={4}
          style={{
            cursor: "pointer",
          }}
          W={"100%"}
        >
          <Text
            fontSize="md"
            flex={1}
            color={state?.index === 1 ? "primary.600" : "black"}
          >
            Configuraciones
          </Text>
          <Ionicons
            name="settings"
            size={20}
            style={{
              color: state?.index === 1 ? colors.primary["600"] : "black",
              marginRight: 10,
            }}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate("LoginScreen");
          }}
          flexDirection="row"
          paddingX={4}
          paddingY={4}
          style={{
            cursor: "pointer",
          }}
          W={"100%"}
        >
          <Text fontSize="md" flex={1}>
            Cerrar sesión
          </Text>
          <FontAwesome5
            name="power-off"
            size={20}
            style={{ color: "black", marginRight: 10 }}
          />
        </Pressable>
      </DrawerContentScrollView>
      <Text textAlign={"center"} padding={5}>
        App Services - {new Date().getFullYear()}
      </Text>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
