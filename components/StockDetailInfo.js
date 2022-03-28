import React from "react";
import { View, Text, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const StockDetailInfo = ({
  title,
  displayAmount,
  changePct,
  containerStyle,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* title */}
      <Text style={{ color: COLORS.white, ...FONTS.h1, textAlign: "justify" }}>
        {title}
      </Text>
      {/* figures */}
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.lightGray3,
          marginTop: -20,
        }}
      >
        Current Value
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginLeft: SIZES.base,
            ...FONTS.h2,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          {displayAmount}
        </Text>
        <Text
          style={{
            color: COLORS.lightGray3,
            ...FONTS.h3,
            marginLeft: 5,
          }}
        >
          Rs.
        </Text>
      </View>
      {/* change percentage  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        {changePct != 0 && (
          <Image
            source={icons.upArrow}
            style={{
              width: 10,
              height: 10,
              alignSelf: "center",
              tintColor: changePct > 0 ? COLORS.lightGreen : COLORS.red,
              transform:
                changePct > 0 ? [{ rotate: "45deg" }] : [{ rotate: "125deg" }],
            }}
          />
        )}
        <Text
          style={{
            marginLeft: SIZES.base,
            alignSelf: "flex-end",
            color:
              changePct == 0
                ? COLORS.lightGray3
                : changePct > 0
                ? COLORS.lightGreen
                : COLORS.red,
            ...FONTS.h3,
          }}
        >
          {changePct}%
        </Text>

        <Text
          style={{
            marginLeft: SIZES.radius,
            alignSelf: "flex-end",
            color: COLORS.lightGray3,
            ...FONTS.h5,
          }}
        >
          7d change
        </Text>
      </View>
    </View>
  );
};
export default StockDetailInfo;
