import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../Config/color";
import { Ionicons } from "@expo/vector-icons";

export default function Cardcarte({ item, ondelete, ...props }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={item.img}
          style={{
            width: 70,
            height: 70,
          }}
        />

        <View style={{ flex: 1, paddingLeft: 5 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: color.grey,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginRight: 5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              paddingRight: 5,
              fontWeight: "700",
            }}
          >
            {item.prix}$
          </Text>
          <TouchableOpacity
            onPress={() => ondelete(item)}
            style={{
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              backgroundColor: color.ternary,
            }}
          >
            <Ionicons name="trash" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderColor: color.light,
    alignItems: "center",
  },
});
