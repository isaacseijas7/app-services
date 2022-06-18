import { NativeBaseProvider } from "native-base";
import React from "react";
import { theme } from "./app/core/theme";
import AppNavigation from "./app/navigation/Navigation";


export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
