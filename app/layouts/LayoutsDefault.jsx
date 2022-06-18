import { View } from "native-base";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const LayoutsDefault = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{ ...style }}>{children}</View>
    </SafeAreaView>
  );
};

export default LayoutsDefault;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
