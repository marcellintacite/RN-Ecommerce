import { View, Text, StyleSheet, FlatList } from "react-native";
import SingleItem from "./SingleItem";
import color from "../Config/color";
import data from "../Config/categorie";

export default function Items(props) {
  return (
    <View style={styles.content}>
      {data.map((item) => (
        <SingleItem key={item.id} item={item} {...props} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
  },
});
