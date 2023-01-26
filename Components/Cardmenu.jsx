import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import color from "../Config/color";

export default function Cardmenu({ title, icon, colored }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#fff",
          height: 60,
          flexDirection: "row",
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome
            name={icon}
            size={20}
            color={colored ? colored : color.ternary}
          />
        </View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
