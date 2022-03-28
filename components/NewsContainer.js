import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const NewsContainer = (props) => {
  // console.log("Data Props", props);
  //console.log(props.navigation());
  const { item } = props;
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        // alignItems: "center",
        justifyContent: "space-around",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray,
        flex: 1,
        height: 90,
        marginRight: SIZES.radius,
      }}
      // onPress={() => console.log("press")}
      //onPress={() => props.navigation.navigate("NewsMore")}
    >
      <View
        style={{
          flexDirection: "row",
          marginRight: 200,
          marginLeft: 20,
        }}
      >
        <Image
          source={item.icon}
          style={{
            height: 60,
            width: 60,
            borderRadius: 50,
          }}
        />

        <Text
          style={{
            ...FONTS.h2,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginLeft: 20,
          }}
        >
          {item.companyName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 80,
          marginTop: -50,
        }}
      >
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginLeft: 20,
          }}
        >
          {item.content}
        </Text>
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          marginRight: 200,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            ...FONTS.body4,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginLeft: 90,
          }}
        >
          {item.content}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: "white",
            textAlign: "center",
            marginLeft: 90,
          }}
        >
          {item.date}
        </Text>
      </View> */}
    </TouchableOpacity>
  );
};
export default NewsContainer;
