import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "./Screens/Home";
import Single from "./Screens/Single";
import Messsage from "./Screens/Message";
import Profile from "./Screens/Profile";
import CustomDrawer from "./Components/CustomDrawer";
import { Feather } from "@expo/vector-icons";
export default function Wrape() {
    const Drawer = createDrawerNavigator();
  return (
    <View>
      <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            drawerActiveBackgroundColor: "#aa18ea",
            drawerActiveTintColor: "#fff",
            headerShown: false,
            drawerLabelStyle: {
              marginLeft: -20,
            },
            drawerInactiveTintColor: "#333",
          }}
        >
          <Drawer.Screen
            name="home"
            component={Home}
            options={{
              drawerIcon: ({ color }) => (
                <Feather name="home" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="signle"
            component={Single}
            options={{
              drawerIcon: ({ color }) => (
                <Feather name="user-check" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="message"
            component={Messsage}
            options={{
              drawerIcon: ({ color }) => (
                <Feather name="message-circle" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="profile"
            component={Profile}
            options={{
              drawerIcon: ({ color }) => (
                <Feather name="user" size={22} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({})