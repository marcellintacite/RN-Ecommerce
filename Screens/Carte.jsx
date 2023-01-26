import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import CardContext from "../Config/Card_context";
import Screen from "../Components/Screen";
import Headers from "../Components/Headers";
import Cardcarte from "../Components/Cardcarte";
import color from "../Config/color";

export default function Carte(props) {
  const { like, card, setCard } = useContext(CardContext);
  const [prix, setPrix] = useState(0);

  useEffect(() => {
    let nombre = 0;
    card.forEach((element) => {
      nombre += element.prix;
    });
    setPrix(nombre);
  });

  const handleDelete = (item) => {
    const nd = card.filter((u) => u.id !== item.id);
    setCard(nd);
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Screen>
        {card.length === 0 && (
          <View style={styles.none}>
            <Text
              style={{
                paddingHorizontal: 20,
                textAlign: "center",
                fontSize: 18,
                color: "#333",
                lineHeight: 26,
              }}
            >
              Veuillez vous rendre dans l'onglet accueil ou categorie,
              choisissez un produit et cliquez sur Panier.
            </Text>

            <Image style={styles.img} source={require("../assets/none.png")} />
            <Text
              style={{
                fontSize: 18,
                color: "#333",
                paddingTop: 20,
              }}
            >
              Vous n'avez rien acheté
            </Text>
          </View>
        )}

        {card.length > 0 && (
          <View
            style={{
              backgroundColor: "#fff",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#333",
                padding: 5,
              }}
            >
              Vos produits
            </Text>

            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                borderEndWidth: 1,
                marginHorizontal: 5,
                paddingTop: 5,
                borderEndColor: color.c,
                flexDirection: "row",
                paddingVertical: 5,
              }}
            >
              <Text>Prix total : </Text>
              <Text
                style={{
                  color: color.quatre,
                  fontWeight: "700",
                }}
              >
                {prix} $
              </Text>
            </View>
            <FlatList
              data={card}
              style={{
                marginTop: 5,
              }}
              keyExtractor={(e) => e.id}
              renderItem={({ item }) => (
                <Cardcarte item={item} ondelete={handleDelete} {...props} />
              )}
            />
          </View>
        )}
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  none: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: 20,
  },
  img: {
    width: "70%",
    height: 220,
  },
});
