import React, {Component, Fragment} from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import StorageManager from "../../helpers/StorageManager";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

// Styles
import profileStyles from "./assets/styles/profileStyles";
import * as colors from "../../global/styles/colors";
import {primaryFontBold} from "../../global/styles/fonts";
import ResetPassword from "./ResetPassword";

class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitleStyle: {
        fontFamily: primaryFontBold,
      },
      title: "Profile",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  };

  state = {
    name: "",
    locationDescription: "",
    jobTitle: "",
    email: "",
    role: "",
    resetPasswordVisible: false,
  };

  logout = () => {
    Alert.alert(
      "Warning!",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            return StorageManager.clearAll()
              .then(data => {
                if (data.success) {
                  this.props.navigation.navigate("AuthLoading");
                } else {
                  alert("Something went wrong!");
                }
              })
              .catch(error => {
                console.log(error);

                alert("Couldn't log you out. Please try again!");
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  componentDidMount() {
    this.setProfileData();
  }

  setProfileData = async () => {
    const profileData = await StorageManager.get("user");
    this.setState({
      name: `${profileData.firstName} ${profileData.lastName}`,
      jobCode: profileData.jobCode,
      locationDescription: profileData.locationDescription,
      jobTitle: profileData.jobTitle,
      email: profileData.email,
      role: profileData.role,
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={profileStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={profileStyles.profileWrapper}>
              <View style={profileStyles.profileHeader}>
                <TouchableOpacity
                  style={profileStyles.logoutBtn}
                  onPress={this.logout}>
                  <SimpleLineIcons
                    name="logout"
                    color={colors.white}
                    size={11}
                  />
                  <Text style={profileStyles.logoutBtnLabel}>Logout</Text>
                </TouchableOpacity>

                <ImageBackground
                  source={require("../../components/Lists/MsgItem/assets/images/avatar.png")}
                  style={profileStyles.profileHeaderImage}
                />
              </View>
              <View style={profileStyles.profileBody}>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Name</Text>
                  <TextInput
                    placeholder="Name"
                    value={this.state.name}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>
                    Location
                  </Text>
                  <TextInput
                    placeholder="Company"
                    value={this.state.locationDescription}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>
                    Job Title
                  </Text>
                  <TextInput
                    placeholder="Job Title"
                    value={this.state.jobTitle}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>
                    Work Email
                  </Text>
                  <TextInput
                    placeholder="Work Email"
                    value={this.state.email}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Role</Text>
                  <TextInput
                    placeholder="Role"
                    value={this.state.role}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                {/* <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Primary Home Phone</Text>
                  <TextInput
                    placeholder="Primary Home Phone"
                    value="(213) - 123 - 1234"
                    style={profileStyles.profileFormInput}
                  />
                </View> */}
                {/* <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Password</Text>
                  <View style={profileStyles.profileFormGroupInline}>
                    <TextInput
                      placeholder="*******"
                      value="test12345"
                      secureTextEntry={true}
                      style={profileStyles.profileFormInput}
                    />
                    <TouchableOpacity style={profileStyles.changePwBtn}>
                      <Text style={profileStyles.changePwBtnLabel}>Change</Text>
                    </TouchableOpacity>
                  </View>
                </View> */}

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.setState({resetPasswordVisible: true})}
                  style={profileStyles.resetPwdBtn}>
                  <Text style={profileStyles.resetPwdBtnText}>
                    Reset Password
                  </Text>
                </TouchableOpacity>

                <ResetPassword
                  visible={this.state.resetPasswordVisible}
                  onRequestClose={() =>
                    this.setState({resetPasswordVisible: false})
                  }
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const ProfileRouter = createStackNavigator({
  Profile,
});

export default ProfileRouter;
