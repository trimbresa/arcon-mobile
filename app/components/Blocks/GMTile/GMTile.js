import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform,
} from "react-native";

import styles from "./assets/styles/styles";
import * as colors from "../../../global/styles/colors";

export default function GMTile(props) {
  return (
    <TouchableOpacity style={styles.gmCard} onPress={props.onPress}>
      <Text style={styles.gmCardTitle} numberOfLines={2}>{props.title}</Text>
      <View style={styles.gmCardProgress}>
        <Text
          style={styles.gmCardProgressNr}
          numberOfLines={1}
        >{parseInt(props.percentage)}%</Text>
        {Platform.OS === "ios" ? (
          <ProgressViewIOS
            progressTintColor={props.color}
            progress={props.percentage / 100}
            trackTintColor={colors.lighterGrey}
            style={{
              borderRadius: 6,
              transform: [{ scaleX: 1.0 }, { scaleY: 2}], height:4, borderRadius: 6}}
          />
        ) : (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            color={props.color}
            progress={props.percentage / 100}
            trackTintColor={colors.lighterGrey}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
