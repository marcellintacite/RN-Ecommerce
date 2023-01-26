import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import color from "../Config/color";

export default function ImgSection() {
  return (
    <View
      style={{
        height: 150,
        marginTop: 15,
        marginHorizontal: 5,
        borderRadius: 20,
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
              fontSize: 20,
              textAlign: "center",
              color: color.ternary,
              fontWeight: "600",
            }}
          >
            PROMOTION 80%
          </Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Achetez aujourd'hui et gagnez 80% de vos achats !
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
