import React, {Component, Fragment} from "react";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  RefreshControl,
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import moment from "moment";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {connect} from "react-redux";
import * as actions from "./actions";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";
import Post from "../../components/Blocks/Post";

// Other views
import NewPost from "../NewPost";
import ManagerDashboard from "../ManagerDashboard";

// Styles
import dashboardStyles from "./assets/styles/dashboardStyles";
import * as colors from "../../global/styles/colors";
import {primaryFontBold} from "../../global/styles/fonts";
import {ActivityIndicator} from "react-native-paper";
import TodaysSchedule from "../../components/Lists/TodaysSchedule/TodaysSchedule";

class Dashboard extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitleStyle: {
        fontFamily: primaryFontBold,
      },
      title: "Dashboard",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  };

  state = {
    pageNr: -1,
  };

  openNewPost = () => {
    this.props.navigation.navigate("NewPost");
  };

  fetchPosts = (refresh = false) => {
    this.setState(
      ({pageNr}) => ({
        pageNr: refresh ? 0 : pageNr + 1,
      }),
      () => {
        const {pageNr} = this.state;
        this.props.fetchPosts(pageNr, refresh);
      },
    );
  };

  componentDidMount() {
    this.fetchPosts(true);
    this.props.fetchLocations();
  }

  render() {
    const {
      posts = [],

      loading,
      refreshing,
      error,
      haveAllPostsLoaded,
    } = this.props;

    const headerComponent = (
      <React.Fragment>
        <TouchableOpacity
          disabled={loading}
          onPress={this.openNewPost}
          style={dashboardStyles.newPostShortcutWrapper}>
          <SimpleLineIcons name="plus" color={colors.white} size={13} />
          <Text style={dashboardStyles.newPostShortcutText}>
            Want to share something?
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
            style={dashboardStyles.statsBtn}
            onPress={() => this.props.navigation.navigate("GMDashboard")}
          >
            <SimpleLineIcons name="pie-chart" size={15} color={colors.white}/>
            <Text
              style={dashboardStyles.statsBtnText}
            >
              Stats
            </Text>
          </TouchableOpacity> */}
      </React.Fragment>
    );

    const emptyComponent =
      !loading && !error && !posts.length ? (
        <Text style={dashboardStyles.dataMsg}>No new posts to show.</Text>
      ) : (
        !loading &&
        error && (
          <Text style={dashboardStyles.dataMsg}>
            Couldn't load your data. Try again later!
          </Text>
        )
      );

    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={dashboardStyles.dashboardSafeArea}>
          <TodaysSchedule />

          <FlatList
            ListHeaderComponent={headerComponent}
            ListFooterComponent={
              !haveAllPostsLoaded ? (
                <View
                  style={{
                    width: "100%",
                    paddingBottom: 20,
                    alignItems: "center",
                  }}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View />
              )
            }
            onEndReachedThreshold={0.01}
            onEndReached={e => {
              this.fetchPosts();
            }}
            refreshControl={
              <RefreshControl
                progressViewOffset={30}
                onRefresh={() => {
                  this.fetchPosts(true);
                }}
                refreshing={refreshing}
                color={colors.primaryColor}
                colors={[colors.primaryColor]}
              />
            }
            initialNumToRender={4}
            ListEmptyComponent={emptyComponent}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={dashboardStyles.contentWrapper}
            data={posts}
            extraData={posts}
            renderItem={({item, index}) => {
              return (
                <View style={dashboardStyles.postWrapper}>
                  <Post post={item} />
                </View>
              );
            }}
            keyExtractor={item => `${item.id}`}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

// Connect with redux
const DashboardContainer = connect(
  ({dashboardReducer}) => dashboardReducer,
  actions,
)(Dashboard);

const HomeRouter = createStackNavigator(
  {
    Dashboard: createStackNavigator(
      {
        NormalDashboard: DashboardContainer,
        GMDashboard: ManagerDashboard,
      },
      {
        initialRouteName: "NormalDashboard",
      },
    ),
    NewPost,
  },
  {
    initialRouteName: "Dashboard",
    mode: "modal",
    headerMode: "none",
  },
);

export default HomeRouter;
