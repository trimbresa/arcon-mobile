import React, { Component, Fragment } from "react";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text
} from "react-native";

import Crashlytics from "react-native-fabric/Fabric";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import moment from "moment";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// Dummy data
import dashboardData from "./dummyDashboard.json";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";
import Post from "../../components/Blocks/Post";
import SemiModal from "../../components/Blocks/SemiModal";
import TodaysSchedule from "../../components/Lists/TodaysSchedule";

// Other views
import PostDetails from "../PostDetails";
import NewPost from "../NewPost";
import ManagerDashboard from "../ManagerDashboard";

// Styles
import dashboardStyles from "./assets/styles/dashboardStyles";
import * as colors from "../../global/styles/colors";

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dashboard",
      headerRight: <NotificationsBtn navigation={navigation}/>,
    };
  }

  state = {
    showModal: false
  }

  openPostDetails = (postId, postTitle, postDescription) => {
    this.props.navigation.navigate(`PostDetails`, { postId, postTitle, postDescription });
  }

  openNewPost = () => {
    this.props.navigation.navigate("NewPost");
  }

  switchToSchedule = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const headerComponent = (
      <>
        <SemiModal
          showModal={this.state.showModal}
          switchToSchedule={this.switchToSchedule}
        >
          <FlatList
            data={[
              {
                id: "12323",
                schedule: "11AM - 12AM"
              },
              {
                id: "123123123",
                schedule: "11AM - 12AM"
              },
              {
                id: "342425",
                schedule: "11AM - 12AM"
              },
              {
                id: "34534521",
                schedule: "11AM - 12AM"
              },
              {
                id: "55424234",
                schedule: "11AM - 12AM"
              },
            ]}
            keyExtractor={item => item.id}
            renderItem={({ item, key  }) => (
              <TodaysSchedule
                key={key}
                icon="clock"
                text="20 Nov, 19, 8:00AM - 29 Nov, 19, 8:00AM"
                onPress={() => alert("Press!")}
              />
            )}
          />
        </SemiModal>
        <TouchableOpacity
          onPress={this.openNewPost}
          style={dashboardStyles.newPostShortcutWrapper}
        >
          <Text style={dashboardStyles.newPostShortcut}>Want to share something?</Text>
        </TouchableOpacity>
        <View
          style={dashboardStyles.scheduleBtnWrapper}
        >
          <TouchableOpacity
            style={dashboardStyles.statsBtn}
            onPress={() => this.props.navigation.navigate("GMDashboard")}
          >
            <SimpleLineIcons name="pie-chart" size={15} color={colors.white}/>
            <Text
              style={dashboardStyles.statsBtnText}
            >
              Stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={dashboardStyles.scheduleBtn}
            onPress={this.switchToSchedule}
          >
            <SimpleLineIcons name="event" size={15} color={colors.black}/>
            <Text
              style={dashboardStyles.scheduleBtnText}
            >
              Today's Schedule
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );

    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={dashboardStyles.dashboardSafeArea}>
          <FlatList
            ListHeaderComponent={headerComponent}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={dashboardStyles.contentWrapper}
            data={dashboardData}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item  }) => (
              <View style={dashboardStyles.postWrapper}>
                <Post
                  key={item.id}
                  avatar={item.avatar}
                  title={item.title}
                  timestamp={moment().subtract(20, "days")}
                  description={item.description}
                  media={item.media}
                  onDetailsPress={() => this.openPostDetails(item.id, item.title, item.description)}
                  liked={item.liked}
                  likes={item.likes}
                  comments={item.comments}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const HomeRouter = createStackNavigator(
  {
    Dashboard: createStackNavigator(
      {
        NormalDashboard: Dashboard,
        GMDashboard: ManagerDashboard,
        PostDetails,
      },
      {
        initialRouteName: 'NormalDashboard'
      }
    ),
    NewPost,
  },
  {
    initialRouteName: "Dashboard",
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(HomeRouter);