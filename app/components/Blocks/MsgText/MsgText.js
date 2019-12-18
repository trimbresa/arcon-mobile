import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {View, Text, Image, Dimensions} from "react-native";
import Media from "../../Blocks/Media";

// Styles
import msgTextStyles from "./assets/styles/msgTextStyles";
import moment from "moment";

const Post = ({
  message,
  userId: loggedUserId,
  prevMessage,
  nextMessage,
  attachment,
}) => {
  const {avatar, body, userId, createdAt} = message;
  const isLast = !prevMessage || prevMessage.userId !== userId;
  const isFirst = !nextMessage || nextMessage.userId !== userId;
  const isIncoming = userId !== loggedUserId;
  const mediaWidth = Dimensions.get("window").width * 0.6;
  const isAttachmentVideo =
    attachment && ["video", "video/link"].includes(attachment.type);
  const isAttachmentImage = attachment && attachment.type === "image";

  const dateBefore = useMemo(() => {
    const nextMsg = nextMessage && moment(nextMessage.createdAt);
    const currMsg = moment(createdAt);

    const isAfter = !nextMsg || nextMsg.isAfter(currMsg, "day");
    const isAfterYear = nextMsg && nextMsg.isAfter(currMsg, "year");

    return isAfter ? (
      <Text style={msgTextStyles.dateIndicator}>
        {currMsg.format(`DD MMMM${isAfterYear ? " YYYY" : ""}`)}
      </Text>
    ) : null;
  }, [createdAt, nextMessage]);

  const timestamp = useMemo(() => {
    const time = moment(createdAt);
    const formatted = time.format("hh:mm A");

    return <Text style={msgTextStyles.timestamp}>{formatted}</Text>;
  }, [createdAt]);

  return (
    <React.Fragment>
      <View
        style={[
          msgTextStyles.wrapper,
          isIncoming && msgTextStyles.incomingWrapper,
          isIncoming && isLast && msgTextStyles.lastIncomingWrapper,
        ]}>
        {!isIncoming && timestamp}
        {isLast && isIncoming && (
          <Image
            style={msgTextStyles.avatar}
            source={
              avatar
                ? {
                    uri: avatar,
                  }
                : require("../../Lists/MsgItem/assets/images/avatar.png")
            }
          />
        )}

        <View
          style={[
            msgTextStyles.textWrapper,
            isIncoming
              ? msgTextStyles.incomingTextWrapper
              : msgTextStyles.outgoingTextWrapper,
            isLast && msgTextStyles.lastTextWrapper,
            isFirst && msgTextStyles.firstTextWrapper,
          ]}>
          <Text
            style={[
              msgTextStyles.text,
              isIncoming && msgTextStyles.incomingText,
            ]}>
            {body}
          </Text>

          <Media
            attachment={attachment}
            style={[
              {marginBottom: 5, marginTop: 10, minWidth: mediaWidth},
              isAttachmentVideo && {
                height: mediaWidth * (9 / 16),
              },
            ]}
            mediaStyle={[
              isAttachmentVideo && {
                height: Dimensions.get("window").width * 0.6 * (9 / 16),
              },
              isAttachmentImage && {
                width: "100%",
                height: "auto",
              },
            ]}
          />
        </View>

        {isIncoming && timestamp}
      </View>

      {dateBefore}
    </React.Fragment>
  );
};

Post.defaultProps = {
  text: "Post",
  outgoingMsg: true,
  isLast: true,
  avatar: "",
};

Post.propTypes = {
  text: PropTypes.string,
  outgoingMsg: PropTypes.bool,
  isLast: PropTypes.bool,
  avatar: PropTypes.string,
};

export default Post;
