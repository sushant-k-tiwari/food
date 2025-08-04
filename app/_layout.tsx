import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ResultsShowScreen from "./screens/ResultsShowScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator
      initialRouteName="Business Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#daddf0ff",
          height: 100,
        },
        headerTitleStyle: {
          fontSize: 22,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Business Search" component={SearchScreen} />
      <Stack.Screen
        name="ResultsShow"
        component={ResultsShowScreen}
        options={{ title: "Business Search" }}
      />
    </Stack.Navigator>
  );
}
