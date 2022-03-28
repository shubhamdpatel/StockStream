import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getHoldings } from "../store/market/marketAction";

import { MainLayout } from ".";
import { BalanceInfo, Chart } from "../components";
import { COLORS, FONTS, SIZES, dummyData, icons } from "../constants";

const Portfolio = ({ getHoldings, myHoldings, navigation }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
    }, [])
  );

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);

  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holdings_value_change_7d || 0),
    0
  );

  let percChange = (valueChange / (totalWallet - valueChange)) * 100;
  // console.log(percChange);

  function renderCurrentBalanceSection() {
    return (
      <View
        style={{
          paddingHorizontal: 10,
          borderBottomLeftRadius: 22,
          borderBottomRightRadius: 22,
          backgroundColor: COLORS.gray,
        }}
      >
        <Text
          style={{
            marginTop: 60,
            color: COLORS.white,
            ...FONTS.largeTitle,
          }}
        >
          Portfolio
        </Text>
        <AddPortfolio value="Add New Stock" type="button" />

        <BalanceInfo
          title="Current Balance"
          displayAmount={totalWallet}
          changePct={percChange}
          containerStyle={{
            marginTop: SIZES.radiusTop,
            // marginTop: -40,
            marginBottom: SIZES.padding,
          }}
        />
      </View>
    );
  }

  const AddPortfolio = ({ value, type }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("AddPortfolio")}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
            textAlign: "right",
          }}
        >
          {value}
        </Text>
        <Image
          source={icons.rightArrow}
          style={{
            height: 15,
            width: 15,
            tintColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
      >
        {/* header section-current balance */}
        {renderCurrentBalanceSection()}
        {/* chart  */}
        <Chart
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          chartPrices={
            selectedCoin
              ? selectedCoin?.sparkline_in_7d.value
              : myHoldings[0]?.sparkline_in_7d.value
          }
        />
        {/* your assets</View> */}
        <FlatList
          data={myHoldings}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
          ListHeaderComponent={
            <View>
              {/* section title  */}
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.white,
                }}
              >
                Your Assets
              </Text>
              {/* header label  */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: SIZES.radius,
                }}
              >
                <Text style={{ flex: 1, color: COLORS.lightGray3 }}>Asset</Text>
                <Text
                  style={{
                    flex: 1,
                    color: COLORS.lightGray3,
                    textAlign: "right",
                  }}
                >
                  Price
                </Text>

                <Text
                  style={{
                    flex: 1,
                    color: COLORS.lightGray3,
                    textAlign: "right",
                  }}
                >
                  Holdings
                </Text>
              </View>
            </View>
          }
          renderItem={({ item }) => {
            let priceColor =
              item.price_change_percentage_7d_in_currency == 0
                ? COLORS.lightGray3
                : item.price_change_percentage_7d_in_currency > 0
                ? COLORS.lightGreen
                : COLORS.red;
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 55,
                }}
                onPress={() => setSelectedCoin(item)}
              >
                {/* asset  */}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.radius,
                      color: COLORS.white,
                      ...FONTS.h4,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                {/* price  */}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  {/* current price  */}
                  <Text
                    style={{
                      textAlign: "right",
                      color: COLORS.white,
                      ...FONTS.h4,
                      lineHeight: 15,
                    }}
                  >
                    ${item.current_price.toLocaleString()}
                  </Text>
                  {/* percentage  */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    {item.price_change_percentage_7d_in_currency != 0 && (
                      <Image
                        source={icons.upArrow}
                        style={{
                          height: 10,
                          width: 10,
                          tintColor: priceColor,
                          transform:
                            item.price_change_percentage_7d_in_currency > 0
                              ? [{ rotate: "45deg" }]
                              : [{ rotate: "125deg" }],
                        }}
                      />
                    )}
                    <Text
                      style={{
                        marginLeft: 5,
                        color: priceColor,
                        ...FONTS.body5,
                        lineHeight: 15,
                      }}
                    >
                      {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </Text>
                  </View>
                </View>
                {/* holding */}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "right",
                      color: COLORS.white,
                      ...FONTS.h4,
                      lineHeight: 15,
                    }}
                  >
                    ${item.total.toLocaleString()}
                  </Text>
                  <Text
                    style={{
                      textAlign: "right",
                      color: COLORS.lightGray3,
                      ...FONTS.body5,
                      lineHeight: 15,
                    }}
                  >
                    {item.qty}
                    {item.symbol.toUpperCase()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

// export default Portfolio;
function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    // coins: state.marketReducer.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
