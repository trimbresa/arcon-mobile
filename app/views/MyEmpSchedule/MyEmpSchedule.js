import React, {Component, Fragment} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
} from "react-native-calendars";
import _ from "lodash";

// Styles
import myEmpScheduleStyles from "./assets/styles/myEmpScheduleStyles";
import * as colors from "../../global/styles/colors";
import calendarStyles from "../../components/Agenda/assets/styles/calendarStyles";

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

const ITEMS = [
  {title: dates[0], data: [{}]},
  {title: dates[1], data: [{}]},
  {
    title: dates[2],
    data: [{hour: "8am - 5pm", duration: "9h", title: "Day shift"}],
  },
  {
    title: dates[3],
    data: [{hour: "8am - 5pm", duration: "9h", title: "Day shift"}],
  },
  {
    title: dates[4],
    data: [{hour: "8am - 5pm", duration: "9h", title: "Day shift"}],
  },
  {
    title: dates[5],
    data: [{hour: "3pm - 9pm", duration: "6h", title: "Night Shift"}],
  },
  {
    title: dates[6],
    data: [{hour: "3pm - 9pm", duration: "6h", title: "Night Shift"}],
  },
  {title: dates[7], data: [{}]},
  {title: dates[8], data: [{}]},
  {title: dates[9], data: [{}]},
  {title: dates[10], data: [{}]},
];

class MyEmpSchedule extends Component {
  onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  };

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  };

  buttonPressed() {
    Alert.alert("show more");
  }

  itemPressed(id) {
    Alert.alert(id);
  }

  renderEmptyItem() {
    return (
      <View style={myEmpScheduleStyles.emptyItem}>
        <Text style={myEmpScheduleStyles.emptyItemText}>No Events Planned</Text>
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
        style={myEmpScheduleStyles.item}>
        <View>
          <Text style={myEmpScheduleStyles.itemHourText}>{item.hour}</Text>
          <Text style={myEmpScheduleStyles.itemDurationText}>
            {item.duration}
          </Text>
        </View>
        <Text style={myEmpScheduleStyles.itemTitleText}>{item.title}</Text>
        <View style={myEmpScheduleStyles.itemButtonContainer}>
          <Button title={"Info"} onPress={this.buttonPressed} />
        </View>
      </TouchableOpacity>
    );
  };

  getMarkedDates = () => {
    const marked = {};
    ITEMS.forEach(item => {
      // only mark dates with data
      if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        marked[item.title] = {marked: true};
      }
    });
    return marked;
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={myEmpScheduleStyles.myEmpScheduleSafarea}>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7].map((img, key) => (
                <TouchableOpacity
                  key={key}
                  style={{
                    marginRight: 10,
                  }}>
                  <Image
                    key={key}
                    source={{
                      uri: "https://i.pravatar.cc/300",
                    }}
                    style={{
                      width: 60,
                      height: 60,
                      marginRight: 20,
                      borderRadius: 60,
                      borderWidth: key === 0 ? 2 : 0,
                      borderColor: colors.primaryColor,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                    }}>
                    Employee {key + 1}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <CalendarProvider
            date={ITEMS[0].title}
            onDateChanged={this.onDateChanged}
            onMonthChange={this.onMonthChange}
            theme={{
              todayButtonTextColor: colors.primaryColor,
              flex: 1,
            }}
            showTodayButton
            disabledOpacity={0.6}
            todayBottomMargin={16}>
            <ExpandableCalendar
              // horizontal={false}
              // hideArrows
              // disablePan
              // hideKnob
              initialPosition={ExpandableCalendar.positions.OPEN}
              firstDay={1}
              markedDates={this.getMarkedDates()}
              theme={calendarStyles}
              calendarStyle={myEmpScheduleStyles.calendar}
              headerStyle={myEmpScheduleStyles.calendar}
            />
            <AgendaList
              sections={ITEMS}
              extraData={this.state}
              renderItem={this.renderItem}
              sectionStyle={myEmpScheduleStyles.section}
            />
          </CalendarProvider>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const MyEmpScheduleRouter = createStackNavigator(
  {
    MyEmpSchedule,
  },
  {
    headerMode: "none",
  },
);

export default MyEmpScheduleRouter;
