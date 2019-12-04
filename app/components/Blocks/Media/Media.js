import React, {useState, useEffect, useRef} from "react";
import {
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import WebView from "react-native-webview";
import YouTube from "react-native-youtube";
// import Vimeo from "react-native-vimeo";

import StorageManager from "../../../helpers/StorageManager.js";
import * as colors from "../../../global/styles/colors";
import {aws_bucket} from "../../../config/api.json";
import RNFetchBlob from "rn-fetch-blob";
import RNVideo from "react-native-video";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import mediaStyles from "./assets/styles/mediaStyles";

const Video = ({networkData, isLink}) => {
  const [paused, setPaused] = useState(true);
  const [visible, setVisible] = useState(true);

  const isYoutube = isLink && networkData.uri.indexOf("youtube.com") != -1;

  const isVimeo = isLink && networkData.uri.indexOf("vimeo.com") != -1;

  let videoId = null;

  if (isYoutube) {
    videoId = networkData.uri.split("?")[1];
    videoId = videoId.split("&")[0].split("=")[1];
  }

  if (isVimeo) {
    videoId = networkData.uri.split("vimeo.com/")[1];
  }

  const timeout = () => {
    setVisible(false);
  };

  const onPressControl = () => {
    setPaused(!paused);
    clearTimeout(timeout);
  };

  const onPressBackground = () => {
    setVisible(!visible);
    clearTimeout(timeout);
    !visible && setTimeout(timeout, 3000);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressBackground}
      style={mediaStyles.video}>
      {isYoutube ? (
        <YouTube
          play={false}
          resumePlayAndroid={false}
          pointerEvents="none"
          apiKey="AIzaSyBMxxIFFomHF2E-14f-mULWcsXqQQMmSPs"
          videoId={videoId}
          controls={1}
          style={{width: "100%", height: "100%"}}
        />
      ) : isVimeo ? (
        <WebView
          javaScriptEnabled={true}
          style={mediaStyles.video}
          source={{
            html: `<html><body><iframe style="border-radius:70px; overflow:hidden" width='100%' height='100%'
            src='https://player.vimeo.com/video/${videoId}'
            frameborder='0'
            allowfullscreen></iframe>
            </body>
            </html>`,
          }}
        />
      ) : (
        <RNVideo
          pointerEvents="none"
          style={{height: "100%", width: "100%"}}
          onReadyForDisplay={() => setVisible(true)}
          source={networkData}
          onPlaybackResume={() => console.log("resume")}
          onLoadStart={e => {}}
          onLoad={e => {}}
          controls={false}
          playInBackground={false}
          paused={paused}
          repeat={false}
          resizeMode="cover"
        />
      )}

      {!isYoutube && !isVimeo && visible && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}>
          <TouchableOpacity
            onPress={onPressControl}
            activeOpacity={0.8}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.lighterGrey,
            }}>
            <Icon
              name={paused ? "play" : "pause"}
              size={30}
              color={colors.darkGrey}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Media = ({attachment}) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const applyToken = async () => {
      const token = await StorageManager.get("token");
      setToken(token);
    };

    applyToken();
  }, []);

  const download = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNFetchBlob.config({
          fileCache: true,
          addAndroidDownloads: {
            notification: true,
            useDownloadManager: true,
            description: "Downloading " + attachment.name,
            path: RNFetchBlob.fs.dirs.DownloadDir + attachment.name,
          },
        })
          .fetch("GET", `${aws_bucket}/${attachment.path}`, {
            Authorization: `Bearer ${token}`,
          })
          .then(resp => {})
          .catch(err => {
            console.log(err);
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  let media = <View />;

  const uri = ["video", "image"].includes(attachment.type)
    ? `${aws_bucket}/${attachment.path}`
    : attachment.path;

  const isLink = attachment.type === "video/link";

  const headers = ["video"].includes(attachment.type)
    ? {Authorization: "Bearer " + token}
    : {};

  const type =
    attachment.type.indexOf("file") != -1
      ? attachment.type.split("/")[0]
      : attachment.type;

  switch (type) {
    case "file":
      const fileType = attachment.type.split("/")[1];
      let color;
      switch (fileType) {
        case "pdf":
          color = colors.red;
          break;
        case "word":
          color = colors.blue;
          break;
        case "excel":
          color = colors.green;
          break;
      }

      media = (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[mediaStyles.documentWrapper, {backgroundColor: color}]}
          onPress={download}>
          <Icon name={`file-${fileType}`} color="white" size={16} />
          <Text numberOfLines={1} style={mediaStyles.documentName}>
            {attachment.name}
          </Text>
          <Icon name="arrow-down" size={17} color="white" />
        </TouchableOpacity>
      );
      break;

    case "image":
      media = (
        <View style={mediaStyles.postBodyMedia}>
          <ImageBackground source={{uri}} style={mediaStyles.image} />
        </View>
      );
      break;

    default:
      media = (
        <Video
          isLink={isLink}
          networkData={{uri, headers}}
          attachment={attachment}
        />
      );

      break;

    // case "video/link":
    // media = (
    //   <WebView
    //     javaScriptEnabled={true}
    //     style={mediaStyles.video}
    //     source={{
    //       html: `<html><body><iframe width='100%' height='100%'
    //         src='${attachment.path.replace("watch", "embed")}'
    //         frameborder='0'
    //         allowfullscreen></iframe>
    //         </body>
    //         </html>`,
    //     }}
    //   />
    // );
    // break;
  }

  return <View style={mediaStyles.wrapper}>{media}</View>;
};

export default Media;
