import { Business } from "@/types";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ResultDetails from "./ResultDetails";

interface Props {
  title: string;
  results: Business[];
}

const ResultsList: FC<Props> = ({ title, results }) => {
  if (!results.length) return null;
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultsShow", { id: item.id });
              }}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
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
