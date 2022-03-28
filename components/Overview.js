import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Overview = ({ label, price, containerStyle }) => {
  return (
    <View
      style={{
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.black,
        flex: 0.5,
        height: 70,
        marginRight: SIZES.radius,
      }}
    >
      <Text
        style={{
          ...FONTS.h2,
          fontWeight: "bold",
          ...containerStyle,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          ...FONTS.h2,
          ...containerStyle,
        }}
      >
        {price}
      </Text>
    </View>
  );
};
export default Overview;
