import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const TextButton = ({ label, containerStyle, onPress }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 3,
        paddingHorizontal: 18,
        borderRadius: 15,
        backgroundColor: COLORS.lightGray,
        // label === "Cryptoassets" ? COLORS.gray1 : COLORS.lightGray,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </View>
  );
};
export default TextButton;
