import {
  Center,
  Container,
  Heading,
  Text,
  View,
  Box,
  Button,
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useTimeout } from "../../hooks/useTimeout";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  return (
    <Center>
      <Container>
        <Center>
          <Heading bold color="white">
            Bienvenido a AppServices
          </Heading>
          <Text color="primary.50">
            Búscalo que alguien lo tiene, lo ofrece o lo hace.
          </Text>
        </Center>
      </Container>
    </Center>
  );
};

const CardOnboarding = ({ title, subTitle, textButton, onPress }) => {
  return (
    <Animatable.View
      style={styles.card}
      animation="slideInUp"
      iterationCount={1}
      direction="alternate"
    >
      <View
        w="100%"
        borderTopLeftRadius="50"
        borderTopRightRadius="50"
        _light={{ bg: "#fff" }}
        h={320}
        justifyContent="center"
      >
        <View paddingX={10}>
          <Heading marginBottom={7} bold>
            {title}
          </Heading>
          <Text marginBottom={7}>{subTitle}</Text>

          <View
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button w="2/3" size="50" borderRadius={25} onPress={onPress}>
              {textButton}
            </Button>
            <Box
              h={2}
              w={2}
              borderRadius={20}
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "primary.600" }}
            ></Box>
            <Box
              h={2}
              w={2}
              borderRadius={20}
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "primary.600" }}
            ></Box>
            <Box
              h={2}
              w={10}
              borderRadius={20}
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "primary.600" }}
            ></Box>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

const OnboardingScreen = () => {
  const [step, setStep] = useState(0);
  const navigation = useNavigation();

  useTimeout(() => {
    if (step === 0) {
      setStep(1);
    }
  }, 2000);

  const stepsData = [
    {
      title: "Consigue la mejor oferta con nosotros",
      subTitle: "Búscalo que alguien lo tiene, lo ofrece o lo hace.",
      textButton: "Siguiente",
    },
    {
      title: "Cuenta a partir de ahora con nosotros.",
      subTitle: "Búscalo que alguien lo tiene, lo ofrece o lo hace.",
      textButton: "Empezar",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View
        w="100%"
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "primary.600" }}
        style={{
          ...styles.container,
          justifyContent: step > 0 ? "space-between" : "center",
        }}
      >
        {step === 0 && <Welcome />}

        {step > 0 && (
          <>
            <View></View>
            {step === 1 && (
              <CardOnboarding
                title={stepsData[step - 1].title}
                subTitle={stepsData[step - 1].subTitle}
                textButton={stepsData[step - 1].textButton}
                onPress={() => {
                  if (step <= 1) {
                    setStep(2);
                  } else {
                    navigation.navigate("LoginScreen");
                  }
                }}
              />
            )}
            {step === 2 && (
              <CardOnboarding
                title={stepsData[step - 1].title}
                subTitle={stepsData[step - 1].subTitle}
                textButton={stepsData[step - 1].textButton}
                onPress={() => {
                  if (step <= 1) {
                    setStep(2);
                  } else {
                    navigation.navigate("LoginScreen");
                  }
                }}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
