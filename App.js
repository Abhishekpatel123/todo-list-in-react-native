import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/helpers/Screen";
import Home from "./app/screen/Home";

export default function App() {
  return (
    <Screen style={{ paddingTop: 30 }}>
      <Home />
    </Screen>
  );
}

const styles = StyleSheet.create({});
