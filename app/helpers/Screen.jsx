import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Conastants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[style, styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Conastants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
