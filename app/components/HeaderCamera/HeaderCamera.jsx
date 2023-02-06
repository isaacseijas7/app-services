import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../core/theme";

const HeaderCamera = ({ toggleCameraFlash, onClose, flashActive }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={toggleCameraFlash}>
        <Ionicons
          name={flashActive ? "md-flash-off" : "md-flash"}
          size={30}
          color="#fff"
        />
      </Pressable>

      <Pressable style={styles.button} onPress={onClose}>
        <Ionicons name="md-close" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[600],
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    paddingVertical: 5,
  },
});

export default HeaderCamera;
