import { ScrollView, Text, View } from "native-base";
import React from "react";
import LayoutsDefault from "../../layouts/LayoutsDefault";

const SettingsScreen = () => {
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
          <Text>Settings</Text>
        </View>
      </ScrollView>
    </LayoutsDefault>
  );
};

export default SettingsScreen;
