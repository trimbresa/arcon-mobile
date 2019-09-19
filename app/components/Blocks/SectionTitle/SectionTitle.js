import React from "react";
import { View, Text } from "react-native";

// Styles
import sectionTitleStyles from "./assets/styles/sectionTitleStyles";

export default function SectionTitle(props) {
  return (
    <View style={sectionTitleStyles.sectionTitleWrapper}>
      <Text
        style={sectionTitleStyles.sectionTitleText}
      >{props.title}</Text>
    </View>
  )
}
