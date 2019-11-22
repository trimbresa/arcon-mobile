import React, {Component, Fragment} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import {connect} from "react-redux";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  Agenda,
  CalendarList,
} from "react-native-calendars";
import _ from "lodash";
import * as actions from "./actions";
import moment from "moment";

// Other views
import MyEmpSchedule from "../MyEmpSchedule";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

// Styles
import scheduleStyles from "./assets/styles/scheduleStyles";
import * as colors from "../../global/styles/colors";
import calendarStyles from "./assets/styles/calendarStyles";

const today = new Date().toISOString().split("T")[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(days) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split("T")[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days) {
  return new Date(Date.now() - 864e5 * days).toISOString().split("T")[0];
}

class Schedule extends Component {
  buttonPressed() {
    Alert.alert("show more");
  }

  itemPressed(id) {
    Alert.alert(id);
  }

  renderEmptyItem = () => {
    return (
      !this.props.scheduleReducer.loading && (
        <View style={scheduleStyles.emptyItem}>
          <Text style={scheduleStyles.emptyItemText}>No events to show.</Text>
        </View>
      )
    );
  };

  renderItem = item => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }

    return (
      <TouchableOpacity
        onPress={() => this.itemPressed(item.title)}
        style={scheduleStyles.item}>
        <View>
          <Text style={scheduleStyles.itemHourText}>
            {item.startDate} - {item.endDate}
          </Text>
          <Text style={scheduleStyles.itemDurationText}>
            {Number(item.duration).toFixed(1)} h
          </Text>
        </View>
        <Text style={scheduleStyles.itemTitleText}>{item.title}</Text>
        <View style={scheduleStyles.itemButtonContainer}>
          <Button title={"Info"} onPress={this.buttonPressed} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {events, loading, activeMonth} = this.props.scheduleReducer;

    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={scheduleStyles.scheduleSafarea}>
          <Agenda
            items={events}
            loadItemsForMonth={month =>
              this.props.fetchSchedule(month.timestamp)
            }
            displayLoadingIndicator={loading}
            renderItem={this.renderItem}
            renderEmptyDate={this.renderEmptyItem}
            renderEmptyData={this.renderEmptyItem}
            rowHasChanged={(r1, r2) => {
              return r1.title !== r2.title;
            }}
            onRefresh={() => this.props.fetchSchedule(activeMonth)}
            refreshing={loading}
            theme={calendarStyles}
            firstDay={1}
            disabledOpacity={0.6}
            todayBottomMargin={16}
            showTodayButton
            sectionStyle={scheduleStyles.section}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

// Connect with redux
const ScheduleContainer = connect(
  scheduleReducer => scheduleReducer,
  actions,
)(Schedule);

const ScheduleRouter = createStackNavigator(
  {
    MySchedule: createMaterialTopTabNavigator(
      {
        "My Schedule": ScheduleContainer,
        // "Employee Schedule": MyEmpSchedule,
      },
      {
        tabBarOptions: {
          lazy: true,
          tabStyle: scheduleStyles.tabBartab,
          indicatorStyle: scheduleStyles.indicatorStyle,
          labelStyle: scheduleStyles.tabBarTabLabel,
          activeTintColor: colors.primaryColor,
          inactiveTintColor: colors.secondaryColor,
          style: scheduleStyles.tabBar,
        },
        initialRouteName: "My Schedule",
      },
    ),
  },
  {
    initialRouteName: "MySchedule",
    defaultNavigationOptions: ({navigation}) => {
      return {
        title: "Schedule",
        headerRight: <NotificationsBtn navigation={navigation} />,
      };
    },
  },
);

export default ScheduleRouter;
