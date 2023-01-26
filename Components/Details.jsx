import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import color from "../Config/color";
import Cards from "./Cards";

export default function Details({ navigation, products }) {
  const [time, setTime] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text
          style={{
            fontWeight: "700",
          }}
        >
          Flash detail
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#333",
            }}
          >
            Solde dans{" "}
          </Text>
          <Text
            style={{
              padding: 5,
              backgroundColor: color.ternary,
              color: "#fff",
              borderRadius: 5,
              fontSize: 10,
            }}
          >
            21:50:12
          </Text>
        </View>
      </View>
      <View style={styles.products}>
        {products.map((p) => (
          <Cards
            data={p}
            key={p.id}
            onPress={() => navigation.navigate("Single", { p })}
          />
        ))}
        {products.length === 0 && (
          <View
            style={{
              flex: 1,
              padding: 30,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "700",
                color: "#333",
              }}
            >
              Produit non trouvé
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.quatree,
    padding: 5,
    flex: 1,
  },
  head: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
});
