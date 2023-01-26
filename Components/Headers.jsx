import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppInput from "../Components/AppInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../Config/color";
import Search from "./Search";

export default function Headers({ navigation, search, setSeach }) {
  const [show, setShow] = useState(false);

  const handleSearch = (text) => {
    setSeach(text);
  };
  return (
    <View>
      <View style={styles.header}>
        <AppInput
          icon="search"
          style={styles.input}
          value={search}
          onChange={handleSearch}
        />
        <View
          style={{
            padding: 5,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Scan")}
            style={{
              padding: 5,
            }}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={20}
              color={color.grey}
            />
          </TouchableWithoutFeedback>
        </View>
        <Modal visible={show}>
          <Search data={search} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
});
