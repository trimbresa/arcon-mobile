import React, {Component} from "react";
import {View, Platform, FlatList, SafeAreaView, KeyboardAvoidingView} from "react-native";

// Components
import MsgDetailsHeader from "../../components/RouterElements/MsgDetailsHeader";
import MsgText from "../../components/Blocks/MsgText";
import MsgInput from "../../components/Blocks/MsgInput";

// Styles
import msgDetailsStyles from "./assets/styles/msgDetailsStyles";

// Data
import data from "./messages.json";

class MsgDetails extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: <MsgDetailsHeader />,
    };
  };

  state = {
    myId: "222",
  };

  render() {
    const listHeader = (
      <>
        <View style={msgDetailsStyles.listFooter} />
        <MsgInput />
      </>
    );

    return (
      <SafeAreaView style={msgDetailsStyles.messagesSafeArea}>
        <KeyboardAvoidingView
          style={msgDetailsStyles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "height" : false}
          keyboardVerticalOffset={90}
          enabled
        >
          <FlatList
            contentContainerStyle={msgDetailsStyles.msgList}
            keyboardDismissMode="on-drag"
            data={data}
            keyboardShouldPersistTaps="never"
            showsVerticalScrollIndicator={false}
            inverted={true}
            ListHeaderComponent={listHeader}
            renderItem={({item, index}) => {
              const isLastText =
                !data[index + 1] ||
                (data[index + 1] && data[index + 1].userId !== item.userId);
              const isOutGoingMsg = item.userId !== this.state.myId;

              return (
                <MsgText
                  outgoingMsg={isOutGoingMsg}
                  text={item.text}
                  lastText={isLastText}
                />
              );
            }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default MsgDetails;
