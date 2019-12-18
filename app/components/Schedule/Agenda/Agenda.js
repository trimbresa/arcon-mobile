import React, {Component, Fragment} from "react";
import {View, Text, SafeAreaView, StatusBar} from "react-native";
import AgendaCard from "../AgendaCard/AgendaCard";

import {Agenda as RNCAgenda} from "react-native-calendars";
import _ from "lodash";
import moment from "moment";

// Styles
import agendaStyles from "./assets/styles/agendaStyles";
import calendarStyles from "./assets/styles/calendarStyles";

class Agenda extends Component {
  renderEmptyData = () => {
    return (
      <View style={agendaStyles.emptyData}>
        <Text style={agendaStyles.emptyDataText}>No events to show.</Text>
      </View>
    );
  };

  renderEmptyItem = () => {
    return <View />;
  };

  renderDay = (p, item) => {
    if (!p) return <View style={agendaStyles.emptyDayIndicator} />;

    const {day, dateString} = p;

    return item ? (
      <View style={agendaStyles.dayIndicator}>
        <Text style={agendaStyles.dayIndicatorMonth}>
          {moment(dateString).format("MMM")}
        </Text>
        <Text style={agendaStyles.dayIndicatorDate}>{day}</Text>
        <Text style={agendaStyles.dayIndicatorDay}>
          {moment(dateString).format("ddd")}
        </Text>
      </View>
    ) : (
      <View style={agendaStyles.emptyItemDayIndicator}>
        <Text style={agendaStyles.emptyItemDayIndicatorText}>
          {moment(dateString).format("DD MMMM, dddd")}
        </Text>
        <Text style={agendaStyles.emptyItemDayIndicatorText}>No events</Text>
      </View>
    );
  };

  renderItem = (item, firstItemInDay) => {
    const {onItemPressed, mapJobs, mapLocations, showAll, type} = this.props;
    return (
      <AgendaCard
        type={type}
        isFirst={firstItemInDay}
        item={item}
        onItemPressed={onItemPressed}
        mapJobs={mapJobs}
        mapLocations={mapLocations}
        showAll={() => showAll(item.startDate)}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={agendaStyles.scheduleSafarea}>
        <RNCAgenda
          {...this.props}
          renderDay={this.renderDay}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyItem}
          renderEmptyData={this.renderEmptyData}
          rowHasChanged={(r1, r2) => r1.id !== r2.id}
          theme={calendarStyles}
          firstDay={1}
          disabledOpacity={0.8}
          todayBottomMargin={16}
          showTodayButton
          sectionStyle={agendaStyles.section}
        />
      </SafeAreaView>
    );
  }
}

export default Agenda;
