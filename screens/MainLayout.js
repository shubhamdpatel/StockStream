import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { connect } from "react-redux";

import { COLORS, SIZES, icons } from "../constants";
import { IconTextButton } from "../components";

const MainLayout = ({ children, isTradeModalVisible }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280],
  });
  return (
    <View style={{ flex: 1 }}>
      {children}
      {/* Dim Backgroud  */}
      {isTradeModalVisible && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedValue}
        />
      )}
      {/* Modal */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: modalY,
          width: "100%",
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}
      >
        <IconTextButton
          label="Transfer"
          icon={icons.send}
          onPress={() => console.log("Transfer")}
        />

        <IconTextButton
          label="WithDraw"
          icon={icons.withdraw}
          containerStyle={{
            marginTop: SIZES.base,
          }}
          onPress={() => console.log("Withdraw")}
        />
      </Animated.View>
    </View>
  );
};
// export default MainLayout;
function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
