import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from "react-native";
import { MainLayout } from ".";
import { connect } from "react-redux";
import { getCoinMarket, getHoldings } from "../store/market/marketAction";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, dummyData, icons } from "../constants";

import {
  BalanceInfo,
  IconTextButton,
  WatchListButton,
  Chart,
  ScriptInfo,
} from "../components";

const SCRIPT_DATA = [
  {
    name: "SENSEX",
    value: "53,900.0",
    per: "0.87%",
  },
  {
    name: "NIFTY 50",
    value: "16,135.05",
    per: "0.78%",
  },
];

const Home = ({
  getHoldings,
  getCoinMarket,
  myHoldings,
  coins,
  navigation,
}) => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
      getCoinMarket();
    }, [getHoldings, getCoinMarket])
  );

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);

  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holdings_value_change_7d || 0),
    0
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 100;
  // console.log(valueChange);
  const ItemDivider = () => {
    return (
      <View
        style={{
          marginTop: 20,
          height: 120,
          width: 1,
          backgroundColor: "white",
        }}
      />
    );
  };

  function renderScriptInfoSection() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        {/* sensex and nifty info  */}

        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
          }}
          horizontal={true}
          data={SCRIPT_DATA}
          renderItem={({ item }) => {
            return <ScriptInfo item={item} />;
          }}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={ItemDivider}
        />

        {/* button  */}
        {/* <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="Sensex"
            containerStyle={{
              flex: 1,
              height: 80,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("sensex")}
          />

          <IconTextButton
            label="NIFTY"
            containerStyle={{
              flex: 1,
              height: 80,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("nifty")}
          />
        </View> */}
      </View>
    );
  }

  const AddWatch = ({ value, type }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("AddWatchList")}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
            textAlign: "right",
            marginTop: -80,
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
            marginTop: -80,
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
        {/* Header  */}
        {renderScriptInfoSection()}
        {/* Chart  */}
        <Chart
          containerStyle={{
            marginTop: SIZES.padding,
          }}
          chartPrices={
            selectedCoin
              ? selectedCoin?.sparkline_in_7d.price
              : coins[0]?.sparkline_in_7d.price
          }
        />
        {/* Top currency  */}
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 30,
            paddingHorizontal: SIZES.padding,
          }}
          ListHeaderComponent={
            <View style={{ marginBottom: SIZES.radius }}>
              {/* watchlist */}
              <View
                style={{
                  // flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    fontSize: 21,
                  }}
                >
                  My Watchlist
                </Text>
                <AddWatch value="Add Watchlist" type="button" />

                {/* Add Watch List */}
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <WatchListButton
                    label="Reliance"
                    containerStyle={{
                      flex: 1,
                      flexDirection: "row",
                      height: 40,
                      marginRight: SIZES.radius,
                    }}
                    onPress={() => console.log("watchlist")}
                  />
                  <WatchListButton
                    label="Wipro"
                    containerStyle={{
                      flex: 1,
                      flexDirection: "row",
                      height: 40,
                      marginRight: SIZES.radius,
                    }}
                    onPress={() => console.log("watchlist")}
                  />

                  <WatchListButton
                    label="TCS"
                    containerStyle={{
                      flex: 1,
                      flexDirection: "row",
                      height: 40,
                      marginRight: SIZES.radius,
                    }}
                    onPress={() => console.log("watchlist")}
                  />
                </View>
              </View>
              {/* <AddWatch value="Add Watchlist" type="button" /> */}
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h3,
                  fontSize: 21,
                  marginTop: 20,
                }}
              >
                Top Cryptocurrency
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            // console.log(item.price_change_percentage_7d_in_currency);
            let priceColor =
              item.price_change_percentage_7d_in_currency == 0
                ? COLORS.lightGray3
                : item.price_change_percentage_7d_in_currency > 0
                ? COLORS.lightGreen
                : COLORS.red;
            // console.log(priceColor);

            return (
              <TouchableOpacity
                style={{
                  height: 55,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // onPress={() => setSelectedCoin(item)}
                //onPress={() => console.log("test")}
                onPress={() => navigation.navigate("StockDetail")}
              >
                {/* logo */}
                <View
                  style={{
                    width: 35,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </View>
                {/* name  */}
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h3,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                {/* figures */}

                <View>
                  <Text
                    style={{
                      textAlign: "right",
                      color: COLORS.white,
                      ...FONTS.h4,
                    }}
                  >
                    ${item.current_price}
                  </Text>
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
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={<View style={{ marginBottom: 50 }} />}
        />
      </View>
    </MainLayout>
  );
};

// export default Home;
function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
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

    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getCoinMarket(
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
