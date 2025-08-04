import yelp from "@/api/yelp";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = () => {
  const route = useRoute();
  // The 'id' is passed as a parameter in the route object.
  // We can access it via route.params.
  // Using optional chaining (?.) to prevent errors if params is undefined.
  const id = route.params?.id;
  const [result, setResult] = useState(null);

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={{ height: 200, width: 300 }} />
          );
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
