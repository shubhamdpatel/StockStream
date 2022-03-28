import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS } from "../constants";

const ScriptInfo = (props) => {
  //console.log("Data Props", props);
  const { item } = props;
  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 150,
        // borderRightWidth: 3,
        // borderColor: COLORS.white,
        backgroundColor: COLORS.black,
        marginHorizontal: SIZES.radius,
      }}
    >
      <View>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.h2,
            textAlign: "center",
            color: COLORS.white,
          }}
        >
          {item.value}
        </Text>
        <Text
          style={{
            ...FONTS.h2,
            color: "#006400",
            textAlign: "center",
          }}
        >
          {item.per}
        </Text>
      </View>
    </View>
  );
};
export default ScriptInfo;
