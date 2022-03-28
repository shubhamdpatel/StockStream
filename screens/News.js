import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons } from "../constants";
import { NewsContainer } from "../components/";
import moment from "moment";
const today = moment(new Date()).format("MMM D YYYY");
// console.log(today);
const LIST_DATA = [
  {
    companyName: "Reliance",
    content: "Today Reliance share price is down",
    icon: icons.reliance,
    date: today,
  },
  {
    companyName: "L&T",
    content: "Today L&T share price is Up",
    icon: icons.landt,
    date: today,
  },
  {
    companyName: "TCS",
    content: "Today TCS share price is Up",
    icon: icons.tcs,
    date: today,
  },
];

const News = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <Text
        style={{
          marginTop: 60,
          color: COLORS.white,
          ...FONTS.largeTitle,
          marginLeft: 10,
        }}
      >
        News
      </Text>
      <FlatList
        data={LIST_DATA}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <NewsContainer item={item} />;
        }}
      />
    </View>
  );
};

export default News;
