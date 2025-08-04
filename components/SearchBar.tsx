import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
}
const SearchBar = ({ term, onTermChange, onTermSubmit }: Props) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.iconStyle} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0EEEE",
    margin: 10,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    borderWidth: 1,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
