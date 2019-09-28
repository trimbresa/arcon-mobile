import React, {Component, Fragment} from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Button, Alert} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {ExpandableCalendar, AgendaList, CalendarProvider} from 'react-native-calendars';
import _ from 'lodash';

// Other views
import MyEmpSchedule from "../MyEmpSchedule";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

// Styles
import scheduleStyles from "./assets/styles/scheduleStyles";
import * as colors from "../../global/styles/colors";
import calendarStyles from "./assets/styles/calendarStyles";

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3); 
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(days) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days) {
  return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const ITEMS = [
  {title: dates[0], data: [{}]},
  {title: dates[1], data: [{}]},
  {title: dates[2], data: [{hour: '8am - 5pm', duration: '9h', title: 'Day shift'}]},
  {title: dates[3], data: [{hour: '8am - 5pm', duration: '9h', title: 'Day shift'}]},
  {title: dates[4], data: [{hour: '8am - 5pm', duration: '9h', title: 'Day shift'}]},
  {title: dates[5], data: [{hour: '3pm - 9pm', duration: '6h', title: 'Night Shift'}]},
  {title: dates[6], data: [{hour: '3pm - 9pm', duration: '6h', title: 'Night Shift'}]},
  {title: dates[7], data: [{}]},
  {title: dates[8], data: [{}]},
  {title: dates[9], data: [{}]},
  {title: dates[10], data: [{}]},
];

class Schedule extends Component {
  onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  }

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  }
  
  buttonPressed() {
    Alert.alert('show more');
  }

  itemPressed(id) {
    Alert.alert(id);
  }

  renderEmptyItem() {
    return (
      <View style={scheduleStyles.emptyItem}>
        <Text style={scheduleStyles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  }

  renderItem = ({item}) => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }
    
    return (
      <TouchableOpacity 
        onPress={() => this.itemPressed(item.title)} 
        style={scheduleStyles.item}
      >
        <View>
          <Text style={scheduleStyles.itemHourText}>{item.hour}</Text>
          <Text style={scheduleStyles.itemDurationText}>{item.duration}</Text>
        </View>
        <Text style={scheduleStyles.itemTitleText}>{item.title}</Text>
        <View style={scheduleStyles.itemButtonContainer}>
          <Button title={'Info'} onPress={this.buttonPressed}/>
        </View>
      </TouchableOpacity>
    );
  }

  getMarkedDates = () => {
    const marked = {};
    ITEMS.forEach(item => {
      // only mark dates with data
      if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        marked[item.title] = {marked: true};
      }
    });
    return marked;
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={scheduleStyles.scheduleSafarea}>
          <CalendarProvider
            date={ITEMS[0].title}
            onDateChanged={this.onDateChanged}
            onMonthChange={this.onMonthChange}
            theme={{todayButtonTextColor: colors.primaryColor}}
            showTodayButton
            disabledOpacity={0.6}
            todayBottomMargin={16}
          >
            <ExpandableCalendar
              // horizontal={false}
              // hideArrows
              // disablePan
              // hideKnob
              initialPosition={ExpandableCalendar.positions.OPEN}
              firstDay={1}
              markedDates={this.getMarkedDates()}
              theme={calendarStyles}
              calendarStyle={scheduleStyles.calendar}
              headerStyle={scheduleStyles.calendar}
            />
            <AgendaList
              sections={ITEMS}
              extraData={this.state}
              renderItem={this.renderItem}
              sectionStyle={scheduleStyles.section}
            />
          </CalendarProvider>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const ScheduleRouter = createStackNavigator(
  {
    MySchedule: createMaterialTopTabNavigator(
      {
        "My Schedule": Schedule,
        "Employee Schedule": MyEmpSchedule,
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
        initialRouteName: "My Schedule"
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

export default createAppContainer(ScheduleRouter);
