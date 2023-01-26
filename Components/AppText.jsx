import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useEffect } from "react/cjs/react.production.min";

export default function AppText({ children, style }) {
  const [loaded] = useFonts({
    PlusJakartaSans: require("./../assets/font/Baloo.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Text
      styles={[
        style,
        {
          fontSize: 20,
        },
      ]}
    >
      {children}
    </Text>
  );
}
