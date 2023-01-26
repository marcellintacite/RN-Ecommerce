import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../Config/color";

export default function ProductCard({ item, colore, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Single", (p = { item }))}
    >
      <View
        style={{
          width: 70,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 35,
            backgroundColor: color.light,
          }}
        >
          <Image
            source={item.img}
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: color.primary,
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
