import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, Heading, Text, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors } from "../../core/theme";
import { useTimeout } from "../../hooks/useTimeout";
import LayoutsDefault from "../../layouts/LayoutsDefault";

const Welcome = () => {
  return (
    <Center paddingX={5}>
      <Heading fontSize="2xl" bold color="white">
        Bienvenido a AppServices
      </Heading>
      <Text fontSize={"md"} color="primary.50">
        Búscalo que alguien lo tiene, lo ofrece o lo hace.
      </Text>
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
            <Button
              w="2/3"
              _text={{
                fontSize: "md",
              }}
              size="50"
              borderRadius={30}
              onPress={onPress}
            >
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
  }, 5000);

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

  const nextStep = (currentStep) => {
    if (currentStep >= stepsData.length) {
      navigation.navigate("LoginScreen");
    } else {
      setStep(currentStep + 1);
    }
  };

  return (
    <LayoutsDefault
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.primary["600"],
      }}
    >
      <View w="100%" h={"100%"} justifyContent="center" alignItems="center">
        {step === 0 && <Welcome />}

        {step > 0 && (
          <>
            <View flex={1} justifyContent="center" alignItems={"center"}>
              <Heading fontSize="2xl" bold color="white">
                Bienvenido a AppServices
              </Heading>
              <Text fontSize={"md"} color="primary.50">
                Búscalo que alguien lo tiene, lo ofrece o lo hace.
              </Text>
            </View>
            {stepsData.map((item, key) => {
              return (
                <View key={key}>
                  {step === key + 1 && (
                    <>
                      <CardOnboarding
                        title={item.title}
                        subTitle={item.subTitle}
                        textButton={item.textButton}
                        onPress={() => {
                          nextStep(key + 1);
                        }}
                      />
                    </>
                  )}
                </View>
              );
            })}
          </>
        )}
      </View>
    </LayoutsDefault>
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
