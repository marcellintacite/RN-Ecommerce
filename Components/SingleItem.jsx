import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import color from "../Config/color";
import Qrcode from "../Components/QrCode";

export default function SingleItem({ item, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Type", { item })}>
      <View style={styles.container}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: item.color,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.img}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: "center",
  },
});
