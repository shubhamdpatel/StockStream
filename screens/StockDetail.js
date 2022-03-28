import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";

import { MainLayout } from ".";

// import { connect } from "react-redux";
// import { getCoinMarket, getHoldings } from "../store/market/marketAction";
import { COLORS, FONTS, SIZES, dummyData, icons } from "../constants";

import { IconTextButton, StockDetailInfo } from "../components";
import Overview from "../components/Overview";
const StockDetail = ({
  // getHoldings,
  // getCoinMarket,
  // myHoldings,
  // coins,
  navigation,
}) => {
  //const [selectedCoin, setSelectedCoin] = useState(null);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getHoldings((holdings = dummyData.holdings));
  //     getCoinMarket();
  //   }, [getHoldings, getCoinMarket])
  // );

  //let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);

  // let valueChange = myHoldings.reduce(
  //   (a, b) => a + (b.holdings_value_change_7d || 0),
  //   0
  // );
  // let percChange = (valueChange / (totalWallet - valueChange)) * 100;
  // console.log(valueChange);
  const BackHome = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
            textAlign: "left",
            marginTop: -70,
          }}
        >
          <Image
            source={icons.leftArrow}
            style={{
              height: 25,
              width: 25,
              tintColor: COLORS.white,
            }}
          />
        </Text>
      </TouchableOpacity>
    );
  };

  function renderCompanyInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        {/* company name-stock info */}

        <StockDetailInfo
          title="Tata Consultancy Service"
          displayAmount="2203"
          changePct="-35"
          containerStyle={{
            marginTop: 60,
            alignItems: "center",
          }}
        />
        <BackHome type="button" />
        {/* button -transfer & widthdraw */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="Transfer"
            icon={icons.send}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("transfer")}
          />

          <IconTextButton
            label="Withdraw"
            icon={icons.withdraw}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("withdraw")}
          />
        </View>
      </View>
    );
  }

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
      >
        {/* Header  */}
        {renderCompanyInfoSection()}
        {/* static Chart  */}
        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.chart}
            style={{
              height: 200,
              alignItems: "center",
            }}
          />
        </View>

        {/* company details with high low  */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 40,
            textAlign: "center",
          }}
        >
          Overview
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Overview
            label="High"
            price="2246.00"
            containerStyle={{ color: COLORS.green }}
          />
          <Overview
            label="Low"
            price="2202.00"
            containerStyle={{ color: COLORS.red }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Overview
            label="Volume"
            price="52,58,130"
            containerStyle={{ color: COLORS.white }}
          />
          <Overview
            label="Info"
            price="Private Sector"
            containerStyle={{ color: COLORS.white }}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default StockDetail;

// function mapStateToProps(state) {
//   return {
//     myHoldings: state.marketReducer.myHoldings,
//     coins: state.marketReducer.coins,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getHoldings: (
//       holdings,
//       currency,
//       coinList,
//       orderBy,
//       sparkline,
//       priceChangePerc,
//       perPage,
//       page
//     ) => {
//       return dispatch(
//         getHoldings(
//           holdings,
//           currency,
//           coinList,
//           orderBy,
//           sparkline,
//           priceChangePerc,
//           perPage,
//           page
//         )
//       );
//     },

//     getCoinMarket: (
//       currency,
//       coinList,
//       orderBy,
//       sparkline,
//       priceChangePerc,
//       perPage,
//       page
//     ) => {
//       return dispatch(
//         getCoinMarket(
//           currency,
//           coinList,
//           orderBy,
//           sparkline,
//           priceChangePerc,
//           perPage,
//           page
//         )
//       );
//     },
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
