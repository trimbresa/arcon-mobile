import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {SafeAreaView, StatusBar, View} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import * as actions from "./actions";

// Components
import CloseBtn from "../../components/Buttons/CloseBtn";
import NewPostForm from "../../components/Forms/NewPostForm";

// Styles
import newPostStyles from "./assets/styles/newPostStyles";
import * as colors from "../../global/styles/colors";

class NewPost extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Create New Post",
      headerLeft: <CloseBtn navigation={navigation} />,
    };
  };

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={newPostStyles.newPostSafeArea}>
          <View
            // keyboardShouldPersistTaps="handled"
            // keyboardDismissMode="on-drag"
            style={{flex: 1}}
            contentContainerStyle={{flex: 1}}>
            <NewPostForm
              locations={this.props.dashboardReducer.locations}
              onSubmit={this.props.createNewPost}
              requestSubmitting={this.props.newPostReducer.isSubmitting}
            />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const NewPostContainer = connect(
  ({newPostReducer, dashboardReducer}) => ({newPostReducer, dashboardReducer}),
  {...actions},
)(NewPost);

const NewPostRouter = createStackNavigator(
  {
    NewPost: NewPostContainer,
  },
  {
    initialRouteName: "NewPost",
    mode: "modal",
  },
);

export default NewPostRouter;
