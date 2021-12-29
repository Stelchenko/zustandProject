import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import create, { SetState } from "zustand";
import FormButton from "../../components/FormButton";
import { StateType } from "./type";

const useStore = create((set:SetState<StateType>) => ({
  count: 0,
  increaseCount: () => set((state:StateType) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state:StateType) => ({ count: state.count > 0 ? state.count - 1 : state.count })),
}));

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
