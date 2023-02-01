import { Camera, CameraType, FlashMode } from "expo-camera";
import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Button, Image, Pressable, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../core/theme";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();

  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [image, setImage] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();
  const [modo, setModo] = useState("photo");
  const cameraRef = useRef(null);

  const [permissionCamera, requestPermissionCamera] =
    Camera.useCameraPermissions();
  const [permissionMicrophone, requestPermissionMicrophone] =
    Camera.useMicrophonePermissions();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
    })();
  }, []);

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

  function toggleModo() {
    setModo((current) => (current === "photo" ? "video" : "photo"));
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({ base64: true });
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false,
    };
    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      console.log(recordedVideo);
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (!permissionCamera) {
    return (
      <View style={styles.containerNotGranted}>
        <Text fontSize="xl" bold>
          Sin acceso a la cámara
        </Text>
      </View>
    );
  }

  if (!permissionMicrophone) {
    return (
      <View style={styles.containerNotGranted}>
        <Text fontSize="xl" bold>
          Sin acceso al micrófono
        </Text>
      </View>
    );
  }

  if (!permissionCamera.granted) {
    return (
      <View style={styles.containerNotGranted}>
        <Text fontSize="lg" bold style={{ marginBottom: 5 }}>
          Sin acceso a la cámara
        </Text>
        <Button
          onPress={() => {
            requestPermissionCamera();
          }}
        >
          Quiero usar la cámara
        </Button>
      </View>
    );
  }

  if (!permissionMicrophone.granted) {
    return (
      <View style={styles.containerNotGranted}>
        <Text fontSize="lg" bold style={{ marginBottom: 5 }}>
          Sin acceso al micrófono
        </Text>
        <Button
          onPress={() => {
            requestPermissionCamera();
          }}
        >
          Quiero usar el micrófono
        </Button>
      </View>
    );
  }

  if (video || image) {
    return (
      <SafeAreaView style={styles.container}>
        {video ? (
          <Video
            style={styles.previewMediaFile}
            source={{ uri: video.uri }}
            useNativeControls
            resizeMode="contain"
            isLooping={false}
          />
        ) : (
          <>
            {image && (
              <Image
                source={{ uri: image }}
                alt="foto"
                style={styles.previewMediaFile}
              />
            )}
          </>
        )}
        <Button
          onPress={() => {
            setVideo(null);
            setImage(null);
          }}
        >
          Regresar
        </Button>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
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
        <View style={styles.containerModos}>
          <Pressable
            style={styles.containerModosBtn}
            onPress={() => {
              if (modo !== "video") {
                toggleModo();
              }
            }}
          >
            <Text
              fontSize={"md"}
              fontWeight={modo === "video" ? "bold" : "normal"}
              style={{
                color: modo === "video" ? "#fff" : "#333",
              }}
            >
              Vídeo
            </Text>
          </Pressable>
          <Pressable
            style={styles.containerModosBtn}
            onPress={() => {
              if (modo !== "photo") {
                toggleModo();
              }
            }}
          >
            <Text
              fontSize={"md"}
              fontWeight={modo === "photo" ? "bold" : "normal"}
              style={{
                color: modo === "photo" ? "#fff" : "#333",
              }}
            >
              Foto
            </Text>
          </Pressable>
        </View>
        <View style={styles.containerBotomGrid}>
          <View style={styles.containerBotomGrid.buttonSync}></View>
          <Pressable
            style={styles.containerBotomGrid.button}
            onPress={() => {
              if (modo === "photo") {
                takePicture();
              }
              if (modo === "video") {
                if (isRecording) {
                  stopRecording();
                } else {
                  recordVideo();
                }
              }
            }}
          >
            <Ionicons
              name={
                modo === "photo"
                  ? "md-camera"
                  : isRecording
                  ? "stop-circle"
                  : "md-videocam-outline"
              }
              size={35}
              color={
                isRecording && modo === "video" ? "red" : colors.primary[600]
              }
            />
          </Pressable>
          <Pressable
            style={styles.containerBotomGrid.buttonSync}
            onPress={() => {
              if (!isRecording) {
                toggleCameraType();
              }
            }}
          >
            <Ionicons name="md-sync" size={30} color={colors.primary[600]} />
          </Pressable>
        </View>
      </View>
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
    flex: 1,
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
  containerBotom: {},
  containerModos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerModosBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary[600],
    borderBottomColor: colors.primary[400],
    borderBottomWidth: 2,
    height: 40,
  },
  containerBotomGrid: {
    backgroundColor: colors.primary[600],
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    button: {
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      width: 70,
      height: 70,
      borderRadius: 50,
    },
    buttonSync: {
      backgroundColor: "#fff",
      width: 50,
      height: 50,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  },
  buttonContainer: {},
  text: {},
  previewMediaFile: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default CameraScreen;
