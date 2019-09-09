import React, { Component, Fragment } from "react";
import {SafeAreaView, StatusBar, ScrollView} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import moment from "moment";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn/NotificationsBtn";

// Styles
import dashboardStyles from "./assets/styles/dashboardStyles";
import Post from "../../components/Blocks/Post/Post";

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dashboard",
      headerRight: <NotificationsBtn navigation={navigation}/>,
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={dashboardStyles.dashboardSafeArea}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={dashboardStyles.contentWrapper}
          >
            <Post
              avatar="https://yt3.ggpht.com/a/AGF-l78waFxjfaseafH7OdstDQ30WuaEo3RI72MiwA=s900-mo-c-c0xffffffff-rj-k-no"
              title="Trim Bresa"
              timestamp={moment().subtract(6, "hours")}
              description="Only text post here"
              liked={true}
              likes={40}
              comments={4}
            />
            <Post
              avatar="https://yt3.ggpht.com/a/AGF-l78waFxjfaseafH7OdstDQ30WuaEo3RI72MiwA=s900-mo-c-c0xffffffff-rj-k-no"
              title="Trim Bresa"
              timestamp={moment().subtract(20, "days")}
              description="Video post here"
              media={{
                video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
              }}
              liked={false}
              likes={2}
              comments={23}
            />
            <Post
              avatar="https://yt3.ggpht.com/a/AGF-l78waFxjfaseafH7OdstDQ30WuaEo3RI72MiwA=s900-mo-c-c0xffffffff-rj-k-no"
              title="Trim Bresa"
              timestamp={moment().subtract(1, "year")}
              description="Luxury is something everyone deserves from time to time."
              media={{
                image: "https://www.active.com/Assets/Fitness/2-week-plan.jpg"
              }}
              liked={false}
              likes={12}
              comments={8}
            />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const HomeRouter = createStackNavigator(
  {
    Dashboard
  }
);

export default createAppContainer(HomeRouter);