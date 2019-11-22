import React, {useState, useEffect} from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

import DocumentPicker from "react-native-document-picker";
import ImagePicker from "react-native-image-picker";

import attachmentStyles from "./assets/styles/attachmentStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as colors from "../../../global/styles/colors";

const Item = ({
  attachment: {
    info: {icon, color, name},
    data = null,
  },
  urlInput,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        attachmentStyles.attachment,
        data && {flex: 1},
        data && data.type === "url" && {paddingVertical: 0},
      ]}>
      <Ionicons name={`ios-${icon}`} size={20} color={color} />

      {data ? (
        data.type === "url" ? (
          urlInput
        ) : (
          <Text style={attachmentStyles.attachmentText} numberOfLines={1}>
            {data.filename}
          </Text>
        )
      ) : (
        <Text style={attachmentStyles.attachmentText}>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

const Attachment = ({
  onChangeAttachment,
  attachment: parentAttachment,
  style,
}) => {
  const [url, setUrl] = useState("");
  const [attachment, setAttachment] = useState(parentAttachment);

  const attachmentOptions = [
    {name: "Image", icon: "image", color: colors.blue},
    {name: "Video", icon: "videocam", color: colors.green},
    {name: "File", icon: "document", color: colors.red},
    {name: "Video URL", icon: "link", color: colors.mango},
  ];

  const onChangeUrl = i => {
    setAttachment({data: {type: "url", url: i}, info: attachment.info});
    onChangeAttachment({type: "url", url: i});
    setUrl(i);
  };

  useEffect(() => {
    if (!parentAttachment) {
      setAttachment(null);
    }
  }, [parentAttachment]);

  const onCancel = () => {
    setAttachment(false);
    onChangeAttachment(null);
  };

  const pickAttachment = async ({name, icon, color}) => {
    const info = {name, icon, color};

    switch (name.toLowerCase()) {
      default:
        ImagePicker.showImagePicker(
          {mediaType: name === "Image" ? "photo" : "video"},
          media => {
            if (!media.error && !media.didCancel) {
              let filename;
              if (media.fileName) filename = media.fileName;
              else {
                filename = media.path.split("/");
                filename = filename[filename.length - 1];
              }

              setAttachment({
                data: {...media, filename},
                info,
              });
              onChangeAttachment({...media, filename});
            } else console.log(media);
          },
        );
        break;

      case "file":
        try {
          const document = await DocumentPicker.pick({
            type: DocumentPicker.types.allFiles,
          });
          setAttachment({
            data: {
              ...document,
              filename: document.name,
            },
            info,
          });
          onChangeAttachment({
            ...document,
            filename: document.name,
          });
        } catch (e) {
          console.log(e);
        }
        break;

      case "video url":
        setAttachment({
          data: {type: "url", url: ""},
          info,
        });
        onChangeAttachment({type: "url", url: ""});
        break;
    }
  };

  return (
    <View style={[attachmentStyles.attachmentsWrapper, style]}>
      <Ionicons
        name="ios-attach"
        size={20}
        color={colors.grey}
        style={{marginRight: 15}}
      />
      {attachment ? (
        <React.Fragment>
          <Item
            attachment={attachment}
            urlInput={
              <TextInput
                style={attachmentStyles.urlInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter URL here..."
                value={url}
                onChangeText={onChangeUrl}
              />
            }
          />

          <TouchableOpacity
            style={attachmentStyles.selectedAttachmentExitBtn}
            activeOpacity={0.7}
            onPress={onCancel}>
            <Ionicons name="ios-close" size={22} color={colors.darkGrey} />
          </TouchableOpacity>
        </React.Fragment>
      ) : (
        <ScrollView
          horizontal
          style={{height: "100%"}}
          contentContainerStyle={{height: "100%"}}
          showsHorizontalScrollIndicator={false}>
          {attachmentOptions.map(p => (
            <Item
              key={p.name}
              attachment={{info: p}}
              url={url}
              onChangeUrl={onChangeUrl}
              onPress={() => pickAttachment(p)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Attachment;
