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
import SemiModal from "../../components/Blocks/SemiModal";
import TodaysSchedule from "../../components/Lists/TodaysSchedule";

// Other views
import NewPost from "../NewPost";
import ManagerDashboard from "../ManagerDashboard";

// Styles
import dashboardStyles from "./assets/styles/dashboardStyles";
import * as colors from "../../global/styles/colors";

class Dashboard extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Dashboard",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  };

  state = {
    showModal: false,
  };

  openNewPost = () => {
    this.props.navigation.navigate("NewPost");
  };

  switchToSchedule = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  componentDidMount() {
    this.props.fetchDashboard();
  }

  render() {
    const {
      posts = [],
      schedules = [],
      loading,
      error,
    } = this.props.dashboardReducer;

    console.log(schedules);

    const headerComponent = (
      <>
        <SemiModal
          showModal={this.state.showModal}
          switchToSchedule={this.switchToSchedule}>
          <FlatList
            data={[]}
            keyExtractor={item => item.id}
            renderItem={({item, key}) => (
              <TodaysSchedule
                key={key}
                icon="clock"
                text="20 Nov, 19, 8:00AM - 29 Nov, 19, 8:00AM"
                onPress={() => alert("Press!")}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={dashboardStyles.dataMsg}>No Schedule for today</Text>
            )}
          />
        </SemiModal>
        <TouchableOpacity
          disabled={loading}
          onPress={this.openNewPost}
          style={dashboardStyles.newPostShortcutWrapper}>
          <Text style={dashboardStyles.newPostShortcut}>
            Want to share something?
          </Text>
        </TouchableOpacity>
        <View style={dashboardStyles.scheduleBtnWrapper}>
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
          <TouchableOpacity
            style={dashboardStyles.scheduleBtn}
            onPress={this.switchToSchedule}>
            <SimpleLineIcons name="event" size={15} color={colors.black} />
            <Text style={dashboardStyles.scheduleBtnText}>
              Today's Schedule
            </Text>
          </TouchableOpacity>
        </View>
      </>
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
          <FlatList
            ListHeaderComponent={headerComponent}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={dashboardStyles.contentWrapper}
            data={posts}
            extraData={posts}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                color={colors.primaryColor}
                colors={[colors.primaryColor]}
                onRefresh={this.props.fetchDashboard}
              />
            }
            initialNumToRender={8}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyComponent}
            renderItem={({item, index}) => {
              return (
                <View style={dashboardStyles.postWrapper}>
                  <Post
                    // avatar={item.avatar}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    timestamp={moment(item.createdOn).format()}
                    description={item.note}
                    media={
                      item.attachment.length
                        ? {
                            [item.attachment[0].type]: item.attachment[0].path,
                          }
                        : {}
                    }
                    onComment={() =>
                      this.props.navigation.navigate(`PostDetails`, {
                        title: `${item.firstName} ${item.lastName}`,
                        key: index,
                        id: item.id,
                        comments: item.reply
                      })
                    }
                    // liked={item.liked}
                    likes={item.likes.length}
                    comments={item.reply.length}
                  />
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
  dashboardReducer => dashboardReducer,
  actions,
)(Dashboard);

const HomeRouter = createStackNavigator(
  {
    Dashboard: createStackNavigator(
      {
        NormalDashboard: DashboardContainer,
        GMDashboard: ManagerDashboard
      },
      {
        initialRouteName: "NormalDashboard"
      }
    ),
    NewPost
  },
  {
    initialRouteName: "Dashboard",
    mode: "modal",
    headerMode: "none",
  },
);

export default HomeRouter;
