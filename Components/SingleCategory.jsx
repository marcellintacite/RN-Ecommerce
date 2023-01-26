import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { products } from "../Config/categorie";
import Headers from "./Headers";
import Screen from "./Screen";
import Details from "./Details";

const SingleCategory = ({ route }) => {
  const { item } = route.params;
  let dataShow = products.filter((e) => e.categotie === item.title);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <Screen>
        <Headers />
        <Details products={dataShow} />
      </Screen>
    </View>
  );
};

export default SingleCategory;

const styles = StyleSheet.create({});
