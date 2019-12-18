import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import moment from "moment";

// Styles
import msgItemStyles from "./assets/styles/msgItemStyles";
import * as colors from "../../../global/styles/colors";

// Images
const avatarPlaceholder = require("./assets/images/avatar.png");

const MsgItem = ({
  onPress,
  userId,
  message: {avatar, isOnline, isRead, createdAt, body, badge, you, users},
}) => {
  const title = users
    ? users
        .filter(u => u.id !== userId)
        .map(u => `${u.firstName} ${u.lastName}`)
        .join(", ")
    : "";
  const timestamp = moment(createdAt).fromNow();

  return (
    <TouchableHighlight
      style={msgItemStyles.msgItemWrapper}
      underlayColor={colors.primaryColorFade}
      onPress={onPress}>
      <React.Fragment>
        <View style={msgItemStyles.avatarWrapper}>
          {!avatar ? (
            <ImageBackground
              source={avatarPlaceholder}
              style={msgItemStyles.avatar}
            />
          ) : (
            <ImageBackground
              source={{
                uri: avatar,
              }}
              style={msgItemStyles.avatar}
            />
          )}
          {isOnline && <View style={msgItemStyles.onlineBadge} />}
        </View>

        <View style={{flex: 1}}>
          <View style={[msgItemStyles.msgRow, msgItemStyles.msgRowFirst]}>
            <Text
              style={[
                msgItemStyles.msgItemTitle,
                !isRead && msgItemStyles.msgItemTitleUnread,
              ]}
              numberOfLines={1}>
              {title}
            </Text>

            <Text style={msgItemStyles.timestamp}>{timestamp}</Text>
          </View>

          <View style={msgItemStyles.msgRow}>
            <Text style={msgItemStyles.msgItemLastMsg} numberOfLines={1}>
              {you === "You:" && "You: "}
              {body}
            </Text>

            {badge > 0 && (
              <View style={msgItemStyles.badge}>
                <Text style={msgItemStyles.badgeNumber}>{badge}</Text>
              </View>
            )}
          </View>
        </View>
      </React.Fragment>
    </TouchableHighlight>
  );
};

MsgItem.defaultProps = {
  avatar: "",
  title: "Message Item",
  lastMsg: "Last message...",
  timeStamp: `${new Date()}`,
  badge: 0,
  isOnline: true,
  onPress: () => alert("Clicked"),
};

MsgItem.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  lastMsg: PropTypes.string,
  timeStamp: PropTypes.string,
  badge: PropTypes.number,
  isOnline: PropTypes.bool,
  onPress: PropTypes.func,
};

export default MsgItem;
