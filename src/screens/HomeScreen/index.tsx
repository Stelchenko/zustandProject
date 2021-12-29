import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import FormButton from "../../components/FormButton";
import { useStore } from "../../hooks/useStore";


const HomeScreen = () => {
  const count = useStore(state => state.count);
  const increase = useStore(state => state.increaseCount);
  const decrease = useStore(state => state.decreaseCount);
  return (
    <View style={styles.screen}>
      <Text style={styles.textCount}>{count}</Text>
      <View style={styles.buttonContainer}>
        <FormButton buttonTitle={"+"} onPress={increase} />
        <FormButton buttonTitle={"-"} onPress={decrease} />
      </View>
    </View>
  );
};

export default HomeScreen;
