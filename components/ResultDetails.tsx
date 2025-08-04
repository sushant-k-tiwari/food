import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  result: any;
}
const ResultDetails = ({ result }: Props) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.title}>{result.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="staro" size={24} color="green" />
        <Text style={styles.title}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
