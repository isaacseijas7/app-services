import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, Heading, Text, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useWindowDimensions } from "react-native-web";
import { colors } from "../../core/theme";
import { useTimeout } from "../../hooks/useTimeout";
import LayoutsDefault from "../../layouts/LayoutsDefault";

const Welcome = () => {
  return (
    <Center paddingX={5}>
      <Heading fontSize="lg" bold color="white">
        Bienvenido a AppServices
      </Heading>
      <Text color="primary.50">
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
  const dimensions = useWindowDimensions();

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
    {
      title: "Esto es una ladilla",
      subTitle: "Dios mio ayudame",
      textButton: "",
    },
  ];

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
            <View flex={1} justifyContent="center">
              <Heading fontSize="lg" bold color="white">
                Bienvenido a AppServices
              </Heading>
            </View>
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
