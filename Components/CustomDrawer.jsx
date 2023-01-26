import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#8200d6",
        }}
      >
        <ImageBackground
          source={require("../assets/drawer.jpg")}
          style={{ padding: 10 }}
        >
          <Image
            source={require("../assets/profile.jpg")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#fff", fontSize: 20 }}>Aksanti Bahiga</Text>
          <Text style={{ color: "#fff" }}>150 points</Text>
          <FontAwesome name="money" color="#fff" size={18} />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Fais par tacite</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
