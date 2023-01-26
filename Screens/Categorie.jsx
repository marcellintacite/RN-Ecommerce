import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../Components/Screen";
import color from "../Config/color";
import AppInput from "../Components/AppInput";
import { dataa, products } from "../Config/categorie";

import ImgContainer from "./ImgContainer";
import ProductCard from "../Components/ProductCard";
import Details from "../Components/Details";

export default function Categorie(props) {
  const [current, setCurrent] = useState("Tous");
  const [refresh, setRefresh] = useState(false);
  const [search, setSeach] = useState("");
  let showProducts = [];
  switch (current) {
    case "Ordinateur":
      showProducts = products.filter((e) => e.categotie === "Macbook");
      break;
    case "PC & Desktop":
      showProducts = products.filter((e) => e.categotie === "Clavier");
      break;
    case "Phone":
      showProducts = products.filter((e) => e.categotie === "Casque");
      break;
    case "Airpods et écouteur":
      showProducts = products.filter((e) => e.categotie === "Tablette");
      break;
    case "Aliments":
      showProducts = products.filter((e) => e.categotie === "Ecouteurs");
      break;
    case "Recettes":
      showProducts = products.filter((e) => e.categotie === "Airpod");
      break;
    case "searched":
      showProducts = products.filter(
        (e) =>
          e.categotie.toLowerCase().includes(search) ||
          e.title.toLowerCase().includes(search)
      );
      break;
    default:
      showProducts = products;
      break;
  }
  const handleChange = (e) => {
    setSeach(e);
    setCurrent("searched");
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <Screen>
        <View style={styles.header}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 15,
            }}
          >
            Catégorie
          </Text>
          <AppInput
            icon="search"
            onChange={handleChange}
            value={search}
            style={{
              width: "75%",
            }}
          />
        </View>
        <View
          style={{
            height: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 80,
              height: "100%",
              marginHorizontal: 5,
              paddingTop: 15,
              borderRightWidth: 0.4,
              borderRightColor: "#3335",
            }}
          >
            <FlatList
              data={dataa}
              keyExtractor={(id) => id.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    setCurrent(item.titre);
                  }}
                >
                  <View
                    style={{
                      marginVertical: 10,
                      padding: 3,
                      borderRadius: 6,
                      backgroundColor:
                        current === item.titre ? color.light : "#fff",
                    }}
                  >
                    <Text
                      style={{
                        color:
                          current === item.titre ? color.ternary : color.grey,
                        textAlign: "center",
                        fontSize: 14,
                        padding: 4,
                      }}
                    >
                      {item.titre}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          {current === "Tous" && (
            <View
              style={{
                flex: 1,
              }}
            >
              <ScrollView
                style={{
                  flex: 1,
                  marginBottom: 100,
                }}
              >
                <ImgContainer />
                <View
                  style={{
                    paddingTop: 10,
                    paddingLeft: 8,
                  }}
                >
                  <Text
                    style={{
                      padding: 5,
                      color: "#333",
                      fontWeight: "600",
                    }}
                  >
                    Produits éléctronique
                  </Text>
                  <FlatList
                    data={products}
                    keyExtractor={(e) => e.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <ProductCard item={item} {...props} />
                    )}
                  />
                </View>

                <View
                  style={{
                    paddingTop: 10,
                    paddingLeft: 5,
                    marginTop: 8,
                  }}
                >
                  <Text
                    style={{
                      padding: 4,
                      color: "#333",
                      fontWeight: "600",
                      paddingBottom: 10,
                    }}
                  >
                    Produits Menagers
                  </Text>
                  <FlatList
                    data={products}
                    keyExtractor={(e) => e.id}
                    horizontal
                    onRefresh={() => {
                      setRefresh(true);
                      products.pop();
                    }}
                    refreshing={refresh}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <ProductCard
                        item={item}
                        colore={color.ternary}
                        {...props}
                      />
                    )}
                  />
                </View>

                <View
                  style={{
                    paddingTop: 10,
                    paddingLeft: 5,
                    marginTop: 8,
                  }}
                >
                  <Text
                    style={{
                      padding: 4,
                      color: "#333",
                      fontWeight: "600",
                      paddingBottom: 10,
                    }}
                  >
                    Produits populaires
                  </Text>
                  <FlatList
                    data={products}
                    keyExtractor={(e) => e.id}
                    horizontal
                    onRefresh={() => {
                      setRefresh(true);
                      products.pop();
                    }}
                    refreshing={refresh}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <ProductCard
                        item={item}
                        colore={color.ternary}
                        {...props}
                      />
                    )}
                  />
                </View>
              </ScrollView>
            </View>
          )}
          {current !== "Tous" && (
            <ScrollView
              style={{
                marginBottom: 100,
              }}
            >
              <Details products={showProducts} {...props} />
            </ScrollView>
          )}
        </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
});
