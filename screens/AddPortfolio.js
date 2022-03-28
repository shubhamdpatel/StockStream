import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { InputPortfolio } from "../components";
const AddPortfolio = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <Text
        style={{
          marginTop: 80,
          marginLeft: 10,
          color: COLORS.white,
          ...FONTS.h1,
        }}
      >
        Add Your Stock
      </Text>
      <InputPortfolio />
      <View
        style={{
          marginTop: 70,
        }}
      >
        <Button title="Add Stock" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
export default AddPortfolio;
