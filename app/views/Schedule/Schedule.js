import React, {Component, Fragment} from "react";
import {SafeAreaView, StatusBar} from "react-native";
import {connect} from "react-redux";
import {createStackNavigator} from "react-navigation-stack";
import Agenda from "../../components/Agenda";
import _ from "lodash";
import * as actions from "./actions";
import moment from "moment";
import {primaryFontBold} from "../../global/styles/fonts";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

// Styles
import scheduleStyles from "./assets/styles/scheduleStyles";
import * as colors from "../../global/styles/colors";
import ScheduleDetails from "./ScheduleDetails";
import ScheduleTypeSwitch from "./ScheduleTypeSwitch";

class Schedule extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontFamily: primaryFontBold,
    },
  };

  state = {
    modalOpen: false,
    selectedItem: null,
    activeTab: "my schedule",
  };

  onItemPressed = item => {
    this.setState({selectedItem: item, modalOpen: true});
  };

  render() {
    const {events, loading, activeMonth, mapJobs, mapLocations} = this.props;
    const {modalOpen, selectedItem, activeTab} = this.state;

    console.log(events);

    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

        <SafeAreaView style={scheduleStyles.scheduleSafarea}>
          <ScheduleTypeSwitch
            activeTab={activeTab}
            onSwitch={activeTab => this.setState({activeTab})}
          />

          <Agenda
            mapJobs={mapJobs}
            onItemPressed={this.onItemPressed}
            items={events}
            loadItemsForMonth={month =>
              this.props.fetchSchedule(month.dateString)
            }
            displayLoadingIndicator={loading}
            onRefresh={() => this.props.fetchSchedule(activeMonth)}
            refreshing={loading}
          />

          <ScheduleDetails
            mapJobs={mapJobs}
            mapLocations={mapLocations}
            schedule={selectedItem}
            onRequestClose={() => this.setState({modalOpen: false})}
            visible={modalOpen}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

// Connect with redux
const ScheduleContainer = connect(
  ({scheduleReducer}) => scheduleReducer,
  actions,
)(Schedule);

const ScheduleRouter = createStackNavigator(
  {
    MySchedule: ScheduleContainer,
    // MySchedule: createMaterialTopTabNavigator(
    //   {
    //     "My Schedule": ScheduleContainer,
    //     "Employee Schedule": MyEmpSchedule,
    //   },
    //   {
    //     tabBarOptions: {
    //       lazy: true,
    //       tabStyle: scheduleStyles.tabBartab,
    //       indicatorStyle: scheduleStyles.indicatorStyle,
    //       labelStyle: scheduleStyles.tabBarTabLabel,
    //       activeTintColor: colors.primaryColor,
    //       inactiveTintColor: colors.secondaryColor,
    //       style: scheduleStyles.tabBar,
    //     },
    //     initialRouteName: "My Schedule",
    //   },
    // ),
  },
  {
    initialRouteName: "MySchedule",
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerTitleStyle: {
          fontFamily: primaryFontBold,
        },
        title: "Schedule",
        headerRight: <NotificationsBtn navigation={navigation} />,
      };
    },
  },
);

export default ScheduleRouter;
