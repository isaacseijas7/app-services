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

const LoginScreen = ({ navigation }) => {
  const [seePassword, setSeePassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Requerido"),
    password: Yup.string()
      .min(8, "¡Demasiado corto!")
      .max(12, "Demasiado largo")
      .minUppercase(2, "Dos letras mayúsculas o más.")
      .minNumbers(1, "Un caracter de númerico o más.")
      .minSymbols(2, "Dos caracteres especiales o más.")
      .required("Requerido"),
  });

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: LoginSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //     navigation.navigate("DrawerNavigator");
  //   },
  // });

  // console.log({ formik });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { resetForm }) => {
          await sleep(1000);
          console.log(values);
          resetForm();
          navigation.navigate("DrawerNavigator");
        }}
        validationSchema={LoginSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          values,
          errors,
          touched,
        }) => (
          <View paddingX={5} paddingY={10}>
            <Heading mb="10">Inicie sesión en su cuenta</Heading>

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

            <FormControl mb="7">
              <Button
                variant="ghost"
                justifyContent="flex-start"
                colorScheme="light"
                _text={{
                  fontSize: "md",
                }}
              >
                Has olvidado tu contraseña
              </Button>
            </FormControl>

            <FormControl mb="7">
              <Button
                w="100%"
                size="50"
                borderRadius={30}
                isLoading={isSubmitting}
                _text={{
                  fontSize: "md",
                }}
                onPress={() => {
                  handleSubmit();
                }}
              >
                Ingresar
              </Button>
            </FormControl>

            <FormControl mb="7">
              <Button
                w="100%"
                size="50"
                borderRadius={30}
                colorScheme="light"
                _text={{
                  fontSize: "md",
                }}
                onPress={() => {
                  navigation.navigate("CreateScreen");
                }}
              >
                Crear una cuenta
              </Button>
            </FormControl>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
