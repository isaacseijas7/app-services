import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  Icon,
  Image,
  Input,
  ScrollView,
  Stack,
  Text,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import ToggleDarkMode from "../components/ToggleDarkMode";

const Home = () => {
  const [show, setShow] = React.useState(false);

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
              {/* <FormControl.HelperText>
              Ingrese su contraseña.
            </FormControl.HelperText> */}
            </FormControl>

            <Button isLoading={false}>Ingresar</Button>
          </Stack>
        </Box>
        {/* <Box>
          <Text bold fontSize="xl" mb="4">
            Invalid
          </Text>
          <FormControl isInvalid>
            <FormControl.Label>Project Title</FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Something is wrong.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box> */}
      </Stack>
    </ScrollView>
  );
};

export default Home;
