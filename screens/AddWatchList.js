import { View, Text, Button } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
const AddWatchList = ({ navigation }) => {
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
        Edit Watchlist
      </Text>

      <View
        style={{
          marginTop: 70,
        }}
      >
        <Button
          title="Add Watchlist"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};
export default AddWatchList;
