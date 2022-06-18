import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button, FormControl,
  Heading,
  Icon,
  Image,
  Input,
  ScrollView,
  Stack,
  Text
} from "native-base";
import React, { useState } from "react";
import ToggleDarkMode from "../components/ToggleDarkMode";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <ScrollView
      w="100%"
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <Stack space={2.5} alignSelf="center" safeArea w={{ base: "100%" }}>
        <Box>
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size="xl"
            w={{
              base: "100%",
            }}
            mb="9"
            mt="5"
          />

          <Stack px="4">
            <Text bold fontSize="xl" mb="2">
              AppServices
            </Text>

            <Heading size={"lg"} mb="4">
              Bienvenido de Nuevo
            </Heading>

            <ToggleDarkMode />

            <FormControl mb="5">
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="Ingrese su email" />
            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input
                w={{
                  base: "100%",
                }}
                type={show ? "text" : "password"}
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
                    onPress={() => setShow(!show)}
                  />
                }
                placeholder="Ingrese su contraseña"
              />
            </FormControl>

            <Button isLoading={false}>Ingresar</Button>
          </Stack>
        </Box>
      </Stack>
    </ScrollView>
  );
};

export default Home;
