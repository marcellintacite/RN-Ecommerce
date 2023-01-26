import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import color from "../Config/color";
import { products } from "../Config/categorie";
import { Toast } from "toastify-react-native";
export default function QrCode({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Rien trouvé");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    products.forEach((p) => {
      if (parseInt(text) === p.id) {
        navigation.navigate("Single", { p });
      } else {
        Toast.error("Rien trouv");
      }
    });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Je n'ai pas de permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Pas de permission</Text>
        <Button title="Donnez acces" onPress={askForCameraPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Scanner un code</Text>
      <View style={styles.barcodeBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleScanned}
          style={{
            width: "100%",
            height: "90%",
            borderRadius: 10,
          }}
        />

        <Text style={styles.texte}>{text}</Text>
      </View>

      {scanned && (
        <TouchableOpacity style={styles.btn} onPress={() => setScanned(false)}>
          <Text>Scan encore</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  barcodeBox: {
    width: "90%",
    padding: 8,
    height: 304,
    backgroundColor: color.ternary,
    borderRadius: 5,
  },
  texte: {
    textAlign: "center",
    fontSize: 18,
    padding: 5,
    color: "#fff",
  },
  head: {
    fontSize: 24,
    padding: 10,
    color: "#333",
    fontWeight: "700",
  },
  btn: {
    padding: 13,
    backgroundColor: color.quatree,
    marginTop: 20,
    borderRadius: 5,
  },
});
