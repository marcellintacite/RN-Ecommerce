import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../Components/Screen";
import Headers from "../Components/Headers";
import ImgSection from "../Components/ImgSection";
import Items from "../Components/Items";
import Details from "../Components/Details";
import { products } from "../Config/categorie";
import * as _ from "lodash";
import color from "../Config/color";
import axios from "axios";

export default function Home(props) {
  const [search, setSeach] = useState("");
  let seachedData = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.categotie.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <View styles={styles.container}>
      <Screen style={styles.content}>
        <Headers {...props} search={search} setSeach={setSeach} />
        {search.length === 0 && (
          <ScrollView>
            <ImgSection />
            <Items {...props} />
            <Details {...props} products={products} />
          </ScrollView>
        )}
        {search.length > 0 && (
          <View>
            <Text
              style={{
                color: "#333",
                textAlign: "center",
                paddingBottom: 5,
                backgroundColor: color.quatree,
              }}
            >
              Resultats de recherche
            </Text>
            <ScrollView
              style={{
                paddingBottom: 50,
              }}
            >
              <Details {...props} products={seachedData} />
            </ScrollView>
          </View>
        )}
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
