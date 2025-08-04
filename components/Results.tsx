import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultDetails from "./ResultDetails";

interface Props {
  title: string;
  results: any[];
}
const ResultsList: FC<Props> = ({ title, results }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 5,
  },
});
