import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import color from "../Config/color";
import AppBtn from "../Components/AppBtn";
import CardContext from "./../Config/Card_context";

export default function Single({ navigation, route }) {
  const [current, setCurrent] = useState(false);
  const [inCard, setCa] = useState(false);
  const { p } = route.params;
  const { like, setLike, setCard, card } = useContext(CardContext);

  useEffect(() => {
    like.forEach((element) => {
      if (p.id === element.id) {
        setCurrent(true);
      }
    });

    card.forEach((element) => {
      if (p.id === element.id) {
        setCa(true);
      }
    });
  });

  const addTocard = (item) => {
    setCard([...card, item]);
    setCa(true);
  };

  const clean = (item) => {
    const nd = card.filter((m) => m.id !== item.id);
    setCard(nd);
    setCa(false);
  };

  const handleLike = (item) => {
    if (like.length === 0) {
      setLike([...like, item]);
      setCurrent(true);
    }
    like.forEach((i) => {
      if (i.id === item.id) {
        const nd = like.filter((u) => u.id !== item.id);
        setLike(nd);
        setCurrent(false);
      } else {
        setLike([...like, item]);
        setCurrent(true);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={p.img}
          style={{
            width: 200,
            height: "80%",
          }}
        />
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="chevron-left" size={20} color={color.grey} />
          </TouchableOpacity>
          <FontAwesome name="align-justify" size={20} color={color.grey} />
        </View>
      </View>

      {/* Debut detail produit */}

      <View>
        <Text
          style={{
            position: "absolute",
            top: -20,
            padding: 5,
            backgroundColor: color.quatre,
            borderRadius: 5,
            color: "#fff",
            marginLeft: 10,
          }}
        >
          -20%
        </Text>
        <View style={styles.titleContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>{p.title}</Text>
            <Text
              style={{
                marginLeft: 30,
                fontSize: 14,
                borderRadius: 0,
                padding: 2,
                backgroundColor: color.ternary,
                borderRadius: 5,
                color: "#fff",
              }}
            >
              {p.prix} $
            </Text>
          </View>
          <View style={styles.iconLeft}>
            {current && (
              <TouchableHighlight
                underlayColor={color.light}
                onPress={() => handleLike(p)}
              >
                <FontAwesome name="heart" size={20} color={color.ternary} />
              </TouchableHighlight>
            )}
            {!current && (
              <TouchableHighlight
                underlayColor={color.light}
                onPress={() => handleLike(p)}
              >
                <FontAwesome name="heart-o" size={20} />
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 5,
          paddingTop: 15,
        }}
      >
        <Text>{p.detail}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 8,
          width: "100%",
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {!inCard && (
          <AppBtn
            label="Ajouter carte"
            colo={color.quatre}
            onPress={() => addTocard(p)}
          />
        )}
        {inCard && (
          <AppBtn
            label="Rétirer de la carte"
            onPress={() => clean(p)}
            colo={color.ternary}
          />
        )}
        <AppBtn label="Contact" colo={color.grey} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    height: 280,
    backgroundColor: "#3451",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  icons: {
    position: "absolute",
    width: 70,
    height: 35,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    left: 10,
    top: 40,
  },
  titleContainer: {
    paddingTop: 15,
    paddingLeft: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 25,
    color: "#333",
  },
});
