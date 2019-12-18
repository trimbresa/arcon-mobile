import React, {useState, useEffect} from "react";
import {Animated, Easing, TouchableOpacity, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as colors from "../../../global/styles/colors";
import * as fonts from "../../../global/styles/fonts";

function FAB({visible, onPress, onPressSelected, selected}) {
  const [position] = useState(new Animated.Value(visible ? 1 : 0));

  useEffect(() => {
    Animated.timing(position, {
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.out(Easing.circle),
    }).start();
  }, [visible, position]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        flexDirection: "row",
        alignItems: "center",
        transform: [
          {
            translateY: position.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          },
        ],
      }}>
      {selected > 0 && (
        <TouchableOpacity
          onPress={onPressSelected}
          style={{
            height: 40,
            paddingHorizontal: 15,
            borderRadius: 100,
            elevation: 5,
            marginRight: 15,
            backgroundColor: colors.primaryColor,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          activeOpacity={0.7}>
          <Icon
            name="md-funnel"
            size={18}
            color="white"
            style={{marginRight: 10, flex: 0}}
          />
          <Text
            style={{
              fontFamily: fonts.primaryFontSemiBold,
              color: colors.white,
              fontSize: 13,
            }}
            numberOfLines={2}>
            {selected} filter{selected > 1 && "s"} applied
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
          elevation: 5,
          backgroundColor: colors.primaryColor,
          alignItems: "center",
          justifyContent: "center",
        }}
        activeOpacity={0.7}>
        <Icon name="ios-funnel" size={18} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
}

export default FAB;
