import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Single from "./Single";
import SingleCategory from "../Components/SingleCategory";
import Scan from "./Scan";
export default function HomeNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Type" component={SingleCategory} />
      <Stack.Screen name="Single" component={Single} />
      <Stack.Screen name="Scan" component={Scan} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
