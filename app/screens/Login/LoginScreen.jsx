import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  FormControl,
  Heading,
  Icon,
  Button,
  Input,
  View,
  Text,
} from "native-base";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const LoginScreen = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View paddingX={5} paddingY={10}>
        <Heading mb="10">Inicie sesión en su cuenta</Heading>

        <FormControl mb="7">
          <Input
            w={{
              base: "100%",
            }}
            h={50}
            InputLeftElement={
              <Icon
                as={<AntDesign name="mail" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            autoCompleteType="email"
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Ingrese su email"
          />
        </FormControl>

        <FormControl mb="7">
          <Input
            type={show ? "text" : "password"}
            w={{
              base: "100%",
            }}
            h={50}
            InputLeftElement={
              <Icon
                as={<AntDesign name={show ? "unlock" : "lock1"} />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            InputRightElement={
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
                onPress={handleClick}
              />
            }
            placeholder="Introduce tu contraseña"
            returnKeyType="done"
          />
        </FormControl>

        <FormControl mb="7">
          <Button variant="link" textAlign="left">
            Has olvidado tu contraseña
          </Button>
        </FormControl>

        <FormControl mb="7">
          <Button
            w="100%"
            size="50"
            borderRadius={25}
            isLoading={false}
            onPress={() => {
              console.log("Ingresar");
            }}
          >
            Ingresar
          </Button>
        </FormControl>

        <FormControl mb="7">
          <Button
            w="100%"
            size="50"
            borderRadius={25}
            backgroundColor="gray.400"
            onPress={() => {
              console.log("Create account");
            }}
          >
            Create account
          </Button>
        </FormControl>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
