import React, {Component, Fragment} from "react";
import {View, Text, SafeAreaView, StatusBar} from "react-native";
import AgendaCard from "./AgendaCard";

import {Agenda as RNCAgenda} from "react-native-calendars";
import _ from "lodash";
import moment from "moment";

// Styles
import agendaStyles from "./assets/styles/agendaStyles";
import calendarStyles from "./assets/styles/calendarStyles";

class Agenda extends Component {
  renderEmptyItem = () => {
    return (
      !this.props.loading && (
        <View style={agendaStyles.emptyItem}>
          <Text style={agendaStyles.emptyItemText}>No events to show.</Text>
        </View>
      )
    );
  };

  renderDay = ({day, dateString}) => {
    return (
      <View style={agendaStyles.dayIndicator}>
        <Text style={agendaStyles.dayIndicatorDate}>{day}</Text>
        <Text style={agendaStyles.dayIndicatorDay}>
          {moment(dateString).format("ddd")}
        </Text>
      </View>
    );
  };

  renderItem = item => {
    if (_.isEmpty(item)) return this.renderEmptyItem();
    return (
      <AgendaCard
        item={item}
        onItemPressed={this.props.onItemPressed}
        mapJobs={this.props.mapJobs}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={agendaStyles.scheduleSafarea}>
        <RNCAgenda
          loadItemsForMonth={month =>
            this.props.fetchSchedule(month.dateString)
          }
          renderDay={this.renderDay}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyItem}
          renderEmptyData={this.renderEmptyItem}
          rowHasChanged={(r1, r2) => {
            return r1.title !== r2.title;
          }}
          theme={calendarStyles}
          firstDay={1}
          disabledOpacity={0.6}
          todayBottomMargin={16}
          showTodayButton
          sectionStyle={agendaStyles.section}
          {...this.props}
        />
      </SafeAreaView>
    );
  }
}

export default Agenda;
