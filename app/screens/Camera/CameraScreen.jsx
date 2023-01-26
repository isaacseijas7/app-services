import { Camera, CameraType, FlashMode } from "expo-camera";
import { StyleSheet, View } from "react-native";
import React, { useState, useRef } from "react";
import { Button, Image, Pressable, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../core/theme";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const navigation = useNavigation();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function toggleCameraFlash() {
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!permission) {
    return (
      <View style={styles.containerNotGranted}>
        <Text fontSize="xl" bold>
          Sin acceso a la cámara
        </Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.containerNotGranted}>
        <Text fontSize="lg" bold style={{ marginBottom: 5 }}>
          Sin acceso a la cámara
        </Text>
        <Button
          onPress={() => {
            requestPermission();
          }}
        >
          Quiero usar la cámara
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {image ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            padding: 10,
          }}
        >
          <View
            style={{
              flex: 2,
            }}
          >
            <Image source={{ uri: image }} alt="foto" style={styles.image} />
          </View>
          <View style={{ height: 60, marginTop: 20 }}>
            <Button onPress={() => setImage(null)}>
              <Text color={"white"}>Tomar otra foto</Text>
            </Button>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.containerTop}>
            <Pressable
              style={styles.containerTop.button}
              onPress={toggleCameraFlash}
            >
              <Ionicons
                name={flash === FlashMode.off ? "md-flash-off" : "md-flash"}
                size={30}
                color="#fff"
              />
            </Pressable>
            <Pressable
              style={styles.containerTop.button}
              onPress={toggleCameraType}
            >
              <Ionicons name="md-sync" size={30} color="#fff" />
            </Pressable>
            <Pressable
              style={styles.containerTop.button}
              onPress={() => {
                navigation.navigate("OnboardingScreen");
              }}
            >
              <Ionicons name="md-close" size={30} color="#fff" />
            </Pressable>
          </View>
          <Camera
            style={styles.camera}
            ref={cameraRef}
            type={type}
            flashMode={flash}
          ></Camera>
          <View style={styles.containerBotom}>
            <Pressable
              style={styles.containerBotom.button}
              onPress={takePicture}
            >
              <Ionicons
                name="md-camera"
                size={30}
                color={colors.primary[600]}
              />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerNotGranted: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  camera: {
    width: "100%",
    flex: 2,
  },
  image: {
    flex: 1,
  },
  containerTop: {
    backgroundColor: colors.primary[600],
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    button: {
      color: "#fff",
      justifyContent: "center",
      alignItems: "center",
      width: 100,
      paddingVertical: 5,
    },
  },
  containerBotom: {
    backgroundColor: colors.primary[600],
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    button: {
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      width: 70,
      height: 70,
      borderRadius: 50,
    },
  },
  buttonContainer: {},
  text: {},
});

export default CameraScreen;
