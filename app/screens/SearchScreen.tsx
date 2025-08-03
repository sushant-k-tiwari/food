import ResultsList from "@/components/Results";
import SearchBar from "@/components/SearchBar";
import useResults from "@/hooks/useResults";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price: string) => {
    return results.filter((result) => {
      return result.price === price;
    });
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
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
