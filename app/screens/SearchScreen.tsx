import yelp from "@/api/yelp";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "san jose",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? (
        <Text
          style={{
            color: "red",
            fontSize: 16,
            padding: 10,
            textAlign: "center",
          }}
        >
          {errorMessage}
        </Text>
      ) : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
