import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";


const App = () => {
  return (
    <View style={styles.screen}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
