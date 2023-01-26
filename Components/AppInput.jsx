import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import color from "../Config/color";

export default function AppInput({ label, style, icon, onChange, ...rest }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <View
          style={{
            padding: 5,
          }}
        >
          <Feather name={icon} size={18} />
        </View>
      )}
      <TextInput
        placeholder="Que cherchez-vous"
        onChangeText={(text) => onChange(text)}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginHorizontal: 5,
    width: "100%",
    backgroundColor: color.light,
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
