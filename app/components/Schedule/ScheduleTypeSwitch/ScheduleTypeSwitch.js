import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import scheduleTypeSwitchStyles from "./assets/styles/scheduleTypeSwitchStyles";
import {SCHEDULE_TABS} from "../../../global/constants";

const animate = async (position, activeTab) =>
  Animated.timing(position, {
    toValue: activeTab === "my schedule" ? 1 : 0,
    useNativeDriver: true,
    duration: 300,
    easing: Easing.out(Easing.circle),
  }).start();

const ScheduleTypeSwitch = ({
  activeTab,
  onSwitch: parentOnSwitch,
  userRole,
}) => {
  const [position] = useState(
    new Animated.Value(activeTab === SCHEDULE_TABS.MY_SCHEDULE ? 0 : 1),
  );

  const onSwitch = s => {
    if (s != activeTab) {
      parentOnSwitch(s);
      animate(position, activeTab);
    }
  };

  return (
    <View style={scheduleTypeSwitchStyles.container}>
      <View style={scheduleTypeSwitchStyles.switchContainer}>
        <Animated.View
          style={[
            scheduleTypeSwitchStyles.switchIndicator,
            {
              transform: [
                {
                  translateX: position.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      0,
                      (Dimensions.get("screen").width * 0.8) / 2,
                    ],
                  }),
                },
              ],
            },
          ]}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onSwitch(SCHEDULE_TABS.MY_SCHEDULE)}
          style={[
            scheduleTypeSwitchStyles.switchItem,
            activeTab === SCHEDULE_TABS.MY_SCHEDULE &&
              scheduleTypeSwitchStyles.activeTab,
          ]}>
          <Text style={scheduleTypeSwitchStyles.switchItemText}>
            {SCHEDULE_TABS.MY_SCHEDULE}
          </Text>
        </TouchableOpacity>

        {userRole === "manager" && (
          <TouchableOpacity
            onPress={() => onSwitch(SCHEDULE_TABS.EMPLOYEE_SCHEDULE)}
            activeOpacity={0.6}
            style={[
              scheduleTypeSwitchStyles.switchItem,
              activeTab === SCHEDULE_TABS.EMPLOYEE_SCHEDULE &&
                scheduleTypeSwitchStyles.activeTab,
            ]}>
            <Text style={scheduleTypeSwitchStyles.switchItemText}>
              {SCHEDULE_TABS.EMPLOYEE_SCHEDULE}
            </Text>
          </TouchableOpacity>
        )}

        {userRole === "employee" && (
          <TouchableOpacity
            onPress={() => onSwitch(SCHEDULE_TABS.DEPARTMENT_SCHEDULE)}
            activeOpacity={0.6}
            style={[
              scheduleTypeSwitchStyles.switchItem,
              activeTab === SCHEDULE_TABS.DEPARTMENT_SCHEDULE &&
                scheduleTypeSwitchStyles.activeTab,
            ]}>
            <Text style={scheduleTypeSwitchStyles.switchItemText}>
              {SCHEDULE_TABS.DEPARTMENT_SCHEDULE}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ScheduleTypeSwitch;
