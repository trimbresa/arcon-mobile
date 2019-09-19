import React, {Component, Fragment} from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import SendBtn from "../../components/Buttons/SendBtn";
import CloseBtn from "../../components/Buttons/CloseBtn";

// Styles
import newPostStyles from "./assets/styles/newPostStyles";
import * as colors from "../../global/styles/colors";

class NewPost extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Create Post",
      headerLeft: <CloseBtn navigation={navigation} />,
      headerRight: <SendBtn />,
    };
  };

  state = {
    newPostText: "",
    activePost: "photo",
  };

  setNewPostText = newPostText => {
    this.setState({
      newPostText,
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={newPostStyles.newPostSafeArea}>
          <ScrollView keyboardDismissMode="on-drag">
            <View style={newPostStyles.newPostWrapper}>
              <TextInput
                value={this.state.newPostText}
                placeholder="Want to share something?"
                style={newPostStyles.newPostInput}
                onChangeText={this.setNewPostText}
                multiline={true}
                autoCorrect={false}
              />
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={newPostStyles.newPostPreview}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={newPostStyles.newPostPreviewMedia}>
                <ImageBackground
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
                  }}
                  style={newPostStyles.newPostPreviewImage}
                >
                  <TouchableOpacity
                    style={newPostStyles.deleteBtn}
                  >
                    <Ionicons
                      name="md-trash"
                      size={16}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={newPostStyles.newPostPreviewMedia}>
                <ImageBackground
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
                  }}
                  style={newPostStyles.newPostPreviewImage}
                >
                  <TouchableOpacity
                    style={newPostStyles.deleteBtn}
                  >
                    <Ionicons
                      name="md-trash"
                      size={16}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={newPostStyles.newPostPreviewMedia}>
                <ImageBackground
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
                  }}
                  style={newPostStyles.newPostPreviewImage}
                >
                  <TouchableOpacity
                    style={newPostStyles.deleteBtn}
                  >
                    <Ionicons
                      name="md-trash"
                      size={16}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={newPostStyles.newPostPreviewMedia}>
                <ImageBackground
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
                  }}
                  style={newPostStyles.newPostPreviewImage}
                >
                  <TouchableOpacity
                    style={newPostStyles.deleteBtn}
                  >
                    <Ionicons
                      name="md-trash"
                      size={16}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </ScrollView>
            <ScrollView
              horizontal={true}
              contentContainerStyle={newPostStyles.newPostFooter}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={newPostStyles.newPostTypeLabel}>
                <Entypo name="text" size={19} color={colors.green} />
                <Text style={newPostStyles.newPostTypeLabelText}>Text</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  newPostStyles.newPostTypeLabel,
                  this.state.activePost === "photo" &&
                    newPostStyles.newPostTypeLabelActive,
                ]}>
                <SimpleLineIcons
                  name="picture"
                  size={18}
                  color={colors.primaryColor}
                />
                <Text style={newPostStyles.newPostTypeLabelText}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={newPostStyles.newPostTypeLabel}>
                <AntDesign name="videocamera" size={18} color={colors.red} />
                <Text style={newPostStyles.newPostTypeLabelText}>Video</Text>
              </TouchableOpacity>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const NewPostRouter = createStackNavigator(
  {
    NewPost,
  },
  {
    initialRouteName: "NewPost",
  },
);

export default createAppContainer(NewPostRouter);
