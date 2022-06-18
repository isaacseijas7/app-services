import { NativeBaseProvider } from "native-base";
import React from "react";
import { theme } from "./app/core/theme";
import AppNavigation from "./app/navigation/Navigation";
// import colors from "native-base/lib/typescript/theme/base/colors";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
