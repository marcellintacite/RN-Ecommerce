import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../Config/color";

export default function AppBtn({ label, colo, icon, style, onPress }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 5,
        overflow: "hidden",
      }}
      onPress={onPress}
    >
      <View
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            backgroundColor: colo,
          },
          style,
        ]}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
