/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";




const App = () => {
  return (
    <View style={styles.screen}>
      <HomeScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center"
  }
})

export default App;
