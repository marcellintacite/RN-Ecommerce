import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import React from "react";

export default function Screen({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
  },
});
