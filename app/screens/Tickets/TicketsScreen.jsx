import { ScrollView, View, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import LayoutsDefault from "../../layouts/LayoutsDefault";

const TicketsScreen = () => {
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
          <Text>Tickets</Text>
        </View>
      </ScrollView>
    </LayoutsDefault>
  );
};

export default TicketsScreen;
