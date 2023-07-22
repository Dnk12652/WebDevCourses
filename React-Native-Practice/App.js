import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import MenuItems from "./components/MenuItems";
import SectionListComp from "./components/SectionListComp";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        <SectionListComp />
      </View>
      <View style={styles.view}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  view: {
    backgroundColor: "#333333",
  },
});
