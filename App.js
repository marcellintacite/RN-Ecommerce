import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CardContext from "./Config/Card_context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categorie from "./Screens/Categorie";
import Carte from "./Screens/Carte";
import Profile from "./Screens/Profile";
import { Feather } from "@expo/vector-icons";
import colors from "./Config/color";
import HomeNav from "./Screens/HomeNav";
import ToastManager, { Toast } from "toastify-react-native";

export default function App() {
  const [card, setCard] = useState([]);
  const [like, setLike] = useState([]);
  const Bottom = createBottomTabNavigator();
  return (
    <CardContext.Provider value={{ card, setCard, like, setLike }}>
      <ToastManager />
      <NavigationContainer>
        <Bottom.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.ternary,
            tabBarInactiveTintColor: colors.grey,
            tabBarStyle: {
              marginBottom: 5,
              paddingTop: 5,
              borderRadius: 5,
              marginHorizontal: 5,
              boxShadow: 0,
              border: 0,
            },
            tabBarLabelStyle: {
              paddingBottom: 8,
            },
          }}
        >
          <Bottom.Screen
            name="home"
            component={HomeNav}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Feather name="home" size={20} color={color} />
              ),
              tabBarLabel: "accueil",
            }}
          />
          <Bottom.Screen
            name="categorie"
            component={Categorie}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Feather name="grid" size={20} color={color} />
              ),
              tabBarLabel: "Catégorie",
            }}
          />
          <Bottom.Screen
            name="cart"
            component={Carte}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  {card.length > 0 && (
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 5,
                        right: -2,
                        top: -2,
                        position: "absolute",
                        backgroundColor: "rgb(246, 65, 65)",
                      }}
                    ></View>
                  )}
                  <Feather name="shopping-cart" size={20} color={color} />
                </View>
              ),
            }}
          />
          <Bottom.Screen
            name="profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Feather name="user" size={20} color={color} />
              ),
            }}
          />
        </Bottom.Navigator>
      </NavigationContainer>
    </CardContext.Provider>
  );
}

const styles = StyleSheet.create({});
