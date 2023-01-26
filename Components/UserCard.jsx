import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import color from "../Config/color";

export default function UserCard() {
  return (
    <View
      style={{
        width: "100%",
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("./../assets/profile.jpg")}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
      />
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Aksanti Bahiga Tacite
        </Text>
        <Text
          style={{
            color: "#3339",
            paddingTop: 2,
          }}
        >
          tacitebahiga@gmail.com
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          alignItems: "center",
          backgroundColor: color.light,
          borderRadius: 20,
        }}
      >
        <FontAwesome name="edit" size={16} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
