import React from "react";

import { View, Text, StyleSheet, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const Item = ({ name, price }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}</Text>
  </View>
);

const LineSeparator = () => <View style={styles.separator} />;

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item} />;

  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerStyle}>
            <Text style={styles.sectionHeader}>{title}</Text>
          </View>
        )}
        // ListFooterComponent={Footer}
        ItemSeparatorComponent={LineSeparator}
      ></SectionList>
    </View>
  );
};

// Add styles to the component
const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    color: "black",
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  headerStyle: {
    backgroundColor: "#F4CE14",
  },
});

export default MenuItems;
