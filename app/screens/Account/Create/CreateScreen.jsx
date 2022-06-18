import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  Text,
  View,
} from "native-base";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const CreateScreen = ({ navigation }) => {
  const [seePassword, setSeePassword] = React.useState(false);
  const [seePasswordConfirm, setSeePasswordConfirm] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View paddingX={5} paddingY={10}>
        <Heading mb="10">Crear cuenta</Heading>

        <FormControl mb="7">
          <Input
            w={{
              base: "100%",
            }}
            h={50}
            fontSize="md"
            InputLeftElement={
              <Icon
                as={<AntDesign name="user" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            returnKeyType="next"
            placeholder="Nombre de usuario"
          />
        </FormControl>

        <FormControl mb="7">
          <Input
            w={{
              base: "100%",
            }}
            h={50}
            fontSize="md"
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
            type={seePassword ? "text" : "password"}
            w={{
              base: "100%",
            }}
            h={50}
            fontSize="md"
            InputLeftElement={
              <Icon
                as={<AntDesign name={seePassword ? "unlock" : "lock1"} />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            InputRightElement={
              <Icon
                as={
                  <MaterialIcons
                    name={seePassword ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
                onPress={() => setSeePassword(!seePassword)}
              />
            }
            placeholder="Introduce tu contraseña"
            returnKeyType="done"
          />
        </FormControl>

        <FormControl mb="7">
          <Input
            type={seePasswordConfirm ? "text" : "password"}
            w={{
              base: "100%",
            }}
            h={50}
            fontSize="md"
            InputLeftElement={
              <Icon
                as={
                  <AntDesign name={seePasswordConfirm ? "unlock" : "lock1"} />
                }
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            InputRightElement={
              <Icon
                as={
                  <MaterialIcons
                    name={seePasswordConfirm ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
                onPress={() => setSeePasswordConfirm(!seePasswordConfirm)}
              />
            }
            placeholder="Confirmar contraseña"
            returnKeyType="done"
          />
        </FormControl>

        <FormControl mb="7">
          <Button
            w="100%"
            size="50"
            borderRadius={30}
            isLoading={false}
            _text={{
              fontSize: "md",
            }}
            onPress={() => {
              navigation.navigate("DrawerNavigator");
            }}
          >
            Crear cuenta
          </Button>
        </FormControl>

        <FormControl mb="7">
          <Button
            variant="ghost"
            justifyContent="center"
            colorScheme="light"
            _text={{
              fontSize: "md",
            }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Ya tienes una cuenta ? iniciar sesión
          </Button>
        </FormControl>
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
