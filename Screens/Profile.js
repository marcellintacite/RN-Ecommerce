import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserCard from "../Components/UserCard";
import Screen from "./../Components/Screen";
import Cardmenu from "../Components/Cardmenu";
import color from "../Config/color";

export default function Profile() {
  return (
    <View>
      <Screen>
        <UserCard />
        <ScrollView>
          <View>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: "#333",
              }}
            >
              Mes achats
            </Text>
            <Cardmenu title="Mes achats" icon="bar-chart-o" />
            <Cardmenu title="Mes ventes" icon="pie-chart" />
            <Cardmenu title="Mes produits" icon="heartbeat" />
          </View>

          <View>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: "#333",
              }}
            >
              Mon compte
            </Text>
            <Cardmenu
              title="Changer d'utilisateur"
              icon="users"
              colored={color.primary}
            />
            <Cardmenu
              title="Deconnexion"
              icon="sign-out"
              colored={color.primary}
            />
          </View>
        </ScrollView>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({});
