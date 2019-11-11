import React, { Component, Fragment } from "react";
import {View, Text, TextInput, SafeAreaView,StatusBar, ScrollView,
  ImageBackground, TouchableOpacity, Alert} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import StorageManager from "../../helpers/StorageManager";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

// Styles
import profileStyles from "./assets/styles/profileStyles";
import * as colors from "../../global/styles/colors";

class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Profile",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  }

  state = {
    name: '',
    jobCode: '',
    locationDescription: '',
    jobTitle: '',
    email: '',
    role: '',
  }

  logout = () => {
    Alert.alert(
      'Warning!',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: async () => {
          return StorageManager.clearAll()
            .then((data) => {
              if(data.success) {
                this.props.navigation.navigate("AuthLoading");
              } else {
                alert("Something went wrong!");
              }
            }).catch((error) => {
              console.log(error);
              
              alert("Couldn't log you out. Please try again!");
            });
        }}
      ],
      {cancelable: false},
    );
  };

  componentDidMount() {
    this.setProfileData();
  }

  setProfileData = async () => {
    const profileData = await StorageManager.get('user');
    this.setState({
      name: `${profileData.firstName} ${profileData.lastName}`,
      jobCode: profileData.jobCode,
      locationDescription: profileData.locationDescription,
      jobTitle: profileData.jobTitle,
      email: profileData.email,
      role: profileData.role,
    })
  }

  render() {
    const avatar = "data:image/jpeg;base64,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";


    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={profileStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={profileStyles.profileWrapper}>
              <View style={profileStyles.profileHeader}>
                <TouchableOpacity style={profileStyles.logoutBtn} onPress={this.logout}>
                  <SimpleLineIcons name="logout" color={colors.white} size={11} />
                  <Text style={profileStyles.logoutBtnLabel}>Logout</Text>
                </TouchableOpacity>

                <ImageBackground
                  source={require('../../components/Lists/MsgItem/assets/images/avatar.png')}
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
                  <Text style={profileStyles.profileFormGroupLabel}>Company</Text>
                  <TextInput
                    placeholder="Employee Code"
                    value={this.state.jobCode}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Company</Text>
                  <TextInput
                    placeholder="Company"
                    value={this.state.locationDescription}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Job Title</Text>
                  <TextInput
                    placeholder="Job Title"
                    value={this.state.jobTitle}
                    style={profileStyles.profileFormInput}
                  />
                </View>
                <View style={profileStyles.profileFormGroup}>
                  <Text style={profileStyles.profileFormGroupLabel}>Work Email</Text>
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
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const ProfileRouter = createStackNavigator(
  {
    Profile
  }
);

export default createAppContainer(ProfileRouter);