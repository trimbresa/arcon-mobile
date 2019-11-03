import React, {Component} from "react";
import {View, Platform, FlatList, SafeAreaView, KeyboardAvoidingView, Text, RefreshControl, ActivityIndicator} from "react-native";
import {createStackNavigator, HeaderBackButton} from "react-navigation-stack";
import {connect} from "react-redux";
import * as actions from "./actions";


// Components
import MsgDetailsHeader from "../../components/RouterElements/MsgDetailsHeader";
import MsgText from "../../components/Blocks/MsgText";
import MsgInput from "../../components/Blocks/MsgInput";

// Styles
import msgDetailsStyles from "./assets/styles/msgDetailsStyles";

// Data
import data from "./messages.json";
import StorageManager from "../../helpers/StorageManager";

class MsgDetails extends Component {
  static navigationOptions = ({navigation}) => {
    let {params = {}} = navigation.state;

    return {
      headerTitle: <MsgDetailsHeader title={params.title || ""} />,
      headerLeft:(<HeaderBackButton onPress={() => navigation.goBack(null)}/>),
      ...params,
    };
  };

  componentDidMount() {
    this.fetchMsgDetails();
  }

  fetchMsgDetails = async () => {
    const { id = -1 } = this.props.navigation.state.params;
    
    this.props.fetchMessageDetails(id);
  }

  render() {
    const { threads = [], myId = null, loading } = this.props.messageDetailsReducer;

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
          keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 90}
          enabled
        >
          <FlatList
            contentContainerStyle={msgDetailsStyles.msgList}
            keyboardDismissMode="on-drag"
            data={threads}
            keyboardShouldPersistTaps="never"
            showsVerticalScrollIndicator={false}
            inverted
            ListFooterComponent={() => loading && (<ActivityIndicator size="large"/>)}
            ListHeaderComponent={listHeader}
            renderItem={({item, index}) => {
              const isLastText =
                !data[index + 1] ||
                (data[index + 1] && data[index + 1].userId !== item.userId);
              const isOutGoingMsg = item.userId !== myId;

              return (
                <MsgText
                  outgoingMsg={isOutGoingMsg}
                  text={item.body}
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

// Connect with redux
const MessageDetailsContainer = connect(
  messageDetailsReducer => messageDetailsReducer,
  actions,
)(MsgDetails);

export default createStackNavigator({
  MsgDetails: MessageDetailsContainer
});