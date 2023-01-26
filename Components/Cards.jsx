import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import color from "../Config/color";

export default function Cards({ data, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={data.img}
          style={{
            width: 80,
            height: 70,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            position: "absolute",
            padding: 5,
            left: -10,
            top: 0,
            borderRadius: 5,
            backgroundColor: color.quatre,
            color: "#fff",
          }}
        >
          {data.prix}$
        </Text>
        <Text
          style={{
            color: color.grey,
            paddingTop: 5,
          }}
        >
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: 5,
  },
});
