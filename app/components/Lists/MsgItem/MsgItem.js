import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  ImageBackground
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import moment from "moment";


// Styles
import msgItemStyles from "./assets/styles/msgItemStyles";
import * as colors from "../../../global/styles/colors";

// Images
const avatar = require("./assets/images/avatar.png");

function MsgItem(props) {
  return (
    <TouchableHighlight
      style={msgItemStyles.msgItemWrapper}
      underlayColor={colors.lightGrey}
      onPress={props.onPress}
    >
      <>
        <View
          style={msgItemStyles.avatarWrapper}
        >
          {
            !props.avatar ? (
              <ImageBackground
                source={avatar}
                style={msgItemStyles.avatar}
              />
            ) : (
              <ImageBackground
                source={{
                  uri: props.avatar
                }}
                style={msgItemStyles.avatar}
              />
            )
          }
          <View style={msgItemStyles.onlineBadge} />
        </View>
        <View
          style={msgItemStyles.msgItemText}
        >
          <Text
            style={[msgItemStyles.msgItemTitle, props.unread && msgItemStyles.msgItemTitleUnread]}
            numberOfLines={1}
          >{props.title}</Text>
          <Text
            style={msgItemStyles.msgItemLastMsg}
            numberOfLines={1}
          >{props.lastMsg}</Text>
        </View>
        <View
          style={msgItemStyles.msgItemActions}
        >
          <Text style={msgItemStyles.timestamp}>
            { moment(props.timestamp).fromNow(true) }
          </Text>
          {
            props.badge > 0 && (
              <View style={msgItemStyles.badge}>
                <Text style={msgItemStyles.badgeNumber}>{props.badge}</Text>
              </View>
            )
          }
        </View>
      </>
    </TouchableHighlight>
  )
}

MsgItem.defaultProps = {
  avatar: "",
  title: "Message Item",
  lastMsg: "Last message...",
  timeStamp: `${new Date()}`,
  badge: 0,
  onPress: () => alert("Clicked")
};

MsgItem.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  lastMsg: PropTypes.string,
  timeStamp: PropTypes.string,
  badge: PropTypes.number,
  onPress: PropTypes.func
};

export default MsgItem;