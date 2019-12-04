import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import scheduleStyles from "./assets/styles/scheduleStyles";

const ScheduleTypeSwitch = ({activeTab, onSwitch: parentOnSwitch}) => {
  const [position] = useState(new Animated.Value(0));

  const onSwitch = s => {
    Animated.timing(position, {
      toValue: activeTab === "my schedule" ? 1 : 0,
      useNativeDriver: true,
      duration: 400,
      easing: Easing.out(Easing.circle),
    }).start(() => parentOnSwitch(s));
  };

  return (
    <View style={scheduleStyles.switchContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onSwitch("my schedule")}
        style={[
          scheduleStyles.switchItem,
          activeTab === "my schedule" && scheduleStyles.activeTab,
        ]}>
        <Text style={scheduleStyles.switchItemText}>my schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSwitch("employee schedule")}
        activeOpacity={0.7}
        style={[
          scheduleStyles.switchItem,
          activeTab === "employee schedule" && scheduleStyles.activeTab,
        ]}>
        <Text style={scheduleStyles.switchItemText}>employee schedule</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          scheduleStyles.switchIndicator,
          {
            transform: [
              {
                translateX: position.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, Dimensions.get("screen").width / 2],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default ScheduleTypeSwitch;
