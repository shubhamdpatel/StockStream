import { View, Text, TextInput, Keyboard, Button } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, FONTS, SIZES } from "../constants";
const InputPortfolio = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const CurrDate = selectedDate;
    setDate(CurrDate);
  };

  return (
    <View
      style={{
        marginLeft: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          marginTop: 28,
          ...FONTS.body6,
        }}
      >
        Enter Company Name:
      </Text>
      <TextInput
        placeholder="ex.Reliance"
        placeholderTextColor="#808080"
        style={{
          fontSize: 18,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 2,
          marginTop: 10,
          color: COLORS.white,
        }}
      />
      <Text
        style={{
          color: COLORS.white,
          marginTop: 28,
          ...FONTS.body6,
        }}
      >
        Investment Date:
      </Text>
      <DateTimePicker
        value={date}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />

      <TextInput
        // placeholder="ex.07/03/2021"
        // placeholderTextColor="#808080"
        value={date.toDateString()}
        style={{
          fontSize: 18,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 2,
          marginTop: -25,
          color: COLORS.white,
          width: 280,
        }}
      />
      <Text
        style={{
          color: COLORS.white,
          marginTop: 28,
          ...FONTS.body6,
        }}
      >
        Stock Price:
      </Text>
      <TextInput
        style={{
          fontSize: 18,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 2,
          marginTop: 10,
          color: COLORS.white,
        }}
        onFocus={Keyboard.dismiss}
      />
      <Text
        style={{
          color: COLORS.white,
          marginTop: 28,
          ...FONTS.body6,
        }}
      >
        Unit:
      </Text>
      <TextInput
        placeholder="ex.2"
        placeholderTextColor="#808080"
        style={{
          fontSize: 18,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 2,
          marginTop: 10,
          color: COLORS.white,
        }}
      />
      <Text
        style={{
          color: COLORS.white,
          marginTop: 28,
          ...FONTS.body6,
        }}
      >
        Total Net Amount:
      </Text>
      <TextInput
        style={{
          fontSize: 18,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 2,
          marginTop: 10,
          color: COLORS.white,
        }}
        onFocus={Keyboard.dismiss}
      />
    </View>
  );
};
export default InputPortfolio;
