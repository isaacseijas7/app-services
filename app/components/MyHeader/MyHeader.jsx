import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Heading, Pressable, View } from "native-base";
import React from "react";

/* A React component. */
const MyHeader = ({ title, style }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{ ...style }}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="primary.600"
      paddingX={5}
      borderBottomColor="gray.300"
      borderBottomWidth={1}
    >
      <View></View>
      <Heading size={"sm"} color="white">
        {title}
      </Heading>
      <View>
        <Pressable
          onPress={() => {
            console.log("Pressable");
            navigation.openDrawer();
          }}
        >
          <Ionicons name="menu" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default MyHeader;
