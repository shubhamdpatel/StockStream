import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
const WatchListButton = ({ label, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: -30,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 70,
        borderRadius: SIZES.radius,
        backgroundColor: "#D3D3D3",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default WatchListButton;
