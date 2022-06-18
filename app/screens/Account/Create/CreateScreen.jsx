import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import {
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  View,
  WarningOutlineIcon
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CreateScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [seePassword, setSeePassword] = React.useState(false);
  const [seePasswordConfirm, setSeePasswordConfirm] = React.useState(false);

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "¡Demasiado corto!")
      .max(15, "Demasiado largo")
      .required("Requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    password: Yup.string()
      .min(8, "¡Demasiado corto!")
      .max(12, "Demasiado largo")
      .minUppercase(2, "Dos letras mayúsculas o más.")
      .minNumbers(1, "Un caracter de númerico o más.")
      .minSymbols(2, "Dos caracteres especiales o más.")
      .required("Requerido"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Requerido"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          await sleep(1000);
          console.log(values);
          setLoading(false);
          resetForm();
          navigation.navigate("DrawerNavigator");
        }}
        validationSchema={SignupSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          resetForm,
        }) => (
          <View paddingX={5} paddingY={10}>
            <Heading mb="10">Crear cuenta</Heading>

            <FormControl mb="7" isInvalid={errors.username && touched.username}>
              <Input
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
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
              {errors.username && touched.username ? (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.username}
                </FormControl.ErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb="7" isInvalid={errors.email && touched.email}>
              <Input
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
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
              {errors.email && touched.email ? (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.email}
                </FormControl.ErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb="7" isInvalid={errors.password && touched.password}>
              <Input
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
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
              {errors.password && touched.password ? (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.password}
                </FormControl.ErrorMessage>
              ) : null}
            </FormControl>

            <FormControl
              mb="7"
              isInvalid={
                errors.passwordConfirmation && touched.passwordConfirmation
              }
            >
              <Input
                onChangeText={handleChange("passwordConfirmation")}
                onBlur={handleBlur("passwordConfirmation")}
                value={values.passwordConfirmation}
                type={seePasswordConfirm ? "text" : "password"}
                w={{
                  base: "100%",
                }}
                h={50}
                fontSize="md"
                InputLeftElement={
                  <Icon
                    as={
                      <AntDesign
                        name={seePasswordConfirm ? "unlock" : "lock1"}
                      />
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
                        name={
                          seePasswordConfirm ? "visibility" : "visibility-off"
                        }
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
              {errors.passwordConfirmation && touched.passwordConfirmation ? (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.passwordConfirmation}
                </FormControl.ErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb="7">
              <Button
                w="100%"
                size="50"
                borderRadius={30}
                isLoading={loading}
                _text={{
                  fontSize: "md",
                }}
                onPress={() => {
                  handleSubmit();
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
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
