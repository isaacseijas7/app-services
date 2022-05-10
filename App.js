import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import { theme } from "./app/core/theme";
import Home from "./app/screens/Home";
import TodoList from "./app/components/TodoList";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <TodoList />
    </NativeBaseProvider>
  );
}
