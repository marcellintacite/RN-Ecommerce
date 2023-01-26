import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import color from "../Config/color";

export default function ImgContainer() {
  return (
    <View
      style={{
        height: 120,
        marginTop: 15,
        marginHorizontal: 7,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={require("../assets/p2.jpg")}
        style={styles.container}
      >
        <View style={styles.texte}>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: color.ternary,
              fontWeight: "600",
            }}
          >
            PROMOTION 80%
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
  },
  texte: {
    width: "50%",
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
