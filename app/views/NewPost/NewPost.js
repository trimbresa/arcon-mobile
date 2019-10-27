import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import * as actions from "./actions";
import {fetchDashboard} from "../Dashboard/actions";

// Components
import SendBtn from "../../components/Buttons/SendBtn";
import CloseBtn from "../../components/Buttons/CloseBtn";
import NewPostForm from "../../components/Forms/NewPostForm";

// Styles
import newPostStyles from "./assets/styles/newPostStyles";
import * as colors from "../../global/styles/colors";

class NewPost extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Create New Post",
      headerLeft: <CloseBtn navigation={navigation} />
    };
  };

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={newPostStyles.newPostSafeArea}>
          <ScrollView keyboardDismissMode="on-drag">
            <NewPostForm
              locations={this.props.dashboardReducer.locations}
              onSubmit={this.props.createNewPost}
              requestSubmitting={this.props.newPostReducer.isSubmitting}
              fetchDashboard={this.props.fetchDashboard}
            />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const NewPostContainer = connect(
  ({newPostReducer, dashboardReducer}) => ({newPostReducer, dashboardReducer}),
  {...actions, fetchDashboard},
)(NewPost);

const NewPostRouter = createStackNavigator(
  {
    NewPost: NewPostContainer,
  },
  {
    initialRouteName: "NewPost",
  },
);

export default createAppContainer(NewPostRouter);
