import { Button, ScrollView, Text, View } from "native-base";
import React from "react";
import LayoutsDefault from "../../layouts/LayoutsDefault";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LayoutsDefault
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          width={"100%"}
          justifyContent="center"
          flex={1}
          alignItems="center"
        >
          <Button
            onPress={() => {
              navigation.navigate("DrawerNavigator");
            }}
          >
            <Text color={"white"}>Home</Text>
          </Button>
        </View>
      </ScrollView>
    </LayoutsDefault>
  );
};

export default HomeScreen;
