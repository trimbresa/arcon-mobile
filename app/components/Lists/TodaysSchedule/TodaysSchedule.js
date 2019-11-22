import React, {Component, useState, useEffect} from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  RefreshControl,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import SemiModal from "../../Blocks/SemiModal";

// Styles
import todaysScheduleStyles from "./assets/styles/todaysScheduleStyles";
import * as colors from "../../../global/styles/colors";
import * as globalStyles from "../../../global/styles/globalStyles";
import moment from "moment";
import StorageManager from "../../../helpers/StorageManager";
import {ActivityIndicator} from "react-native-paper";
import DashboardService from "../../../services/DashboardService";

const Item = ({schedule, isManager}) => {
  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity
      style={todaysScheduleStyles.scheduleWrapper}
      activeOpacity={0.6}
      onPressIn={() => setOpen(!open)}>
      <View style={todaysScheduleStyles.infoWrapper}>
        <MaterialCommunityIcons
          name="clock"
          color={colors.grey}
          size={20}
          style={todaysScheduleStyles.icon}
        />
        <View>
          <Text style={todaysScheduleStyles.scheduleTitle} numberOfLines={1}>
            {!isManager
              ? schedule.day
              : `${schedule.firstName} ${schedule.lastName}`}
          </Text>
          <Text style={todaysScheduleStyles.scheduleText} numberOfLines={1}>
            {!isManager
              ? `${schedule.duration.hrs}h ${schedule.duration.min}m`
              : `${moment(schedule.startDate).format("DD MMMM")}  |  ${
                  schedule.duration.hrs
                }h ${schedule.duration.min}m  |  ${schedule.name}`}
          </Text>
        </View>
      </View>
      {open && (
        <View style={todaysScheduleStyles.eventsWrapper}>
          <Text style={todaysScheduleStyles.eventsTitle}>Events</Text>
          {schedule.events.map(e => (
            <View key={e.id.toString()} style={todaysScheduleStyles.event}>
              <MaterialCommunityIcons
                name="timeline"
                color={colors.grey}
                size={22}
              />
              <Text style={todaysScheduleStyles.eventText}>{`${
                e.name
              }   ${moment(e.startDate).format("hh:mma")} - ${moment(
                e.endDate,
              ).format("hh:mma")}`}</Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default class TodaysSchedule extends Component {
  state = {
    showModal: false,
    user: null,
    loading: true,
    schedules: [],
    refreshing: false,
  };

  setProfileData = async () => {
    const user = await StorageManager.get("user");
    this.setState({user});
  };

  getSchedules = async () => {
    const schedules = await DashboardService.fetchSchedules();
    // console.log(schedules);
    this.setState({
      schedules: schedules.data,
      loading: false,
      refreshing: false,
    });
  };

  componentDidMount = () => {
    this.setProfileData();
    this.getSchedules();
  };

  render() {
    const {showModal, user, schedules, loading, refreshing} = this.state;
    const isManager = user && user.role === "manager";

    return (
      <React.Fragment>
        <SemiModal
          title={`${isManager ? "Today's" : "Weekly"} schedule`}
          showModal={showModal}
          onRequestClose={() => this.setState({showModal: false})}>
          {user ? (
            <FlatList
              data={schedules}
              contentContainerStyle={todaysScheduleStyles.schedulesList}
              keyExtractor={item => item.email || item.day}
              renderItem={({item}) => (
                <Item isManager={isManager} schedule={item} />
              )}
              refreshControl={
                <RefreshControl
                  onRefresh={() => {
                    this.setState({refreshing: true}, this.getSchedules);
                  }}
                  refreshing={refreshing}
                  color={colors.primaryColor}
                  colors={[colors.primaryColor]}
                />
              }
              ListEmptyComponent={() =>
                loading ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={globalStyles.placeholderText}>
                    {`No Schedule for ${isManager ? "today" : "this week"}`}
                  </Text>
                )
              }
            />
          ) : (
            <ActivityIndicator />
          )}
        </SemiModal>

        <TouchableOpacity
          style={todaysScheduleStyles.scheduleBtn}
          onPress={() => this.setState({showModal: true})}>
          <SimpleLineIcons name="event" size={18} color={colors.primaryColor} />
          <Text style={todaysScheduleStyles.scheduleBtnText}>
            {`${isManager ? "Today's" : "Weekly"} Schedule`}
          </Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}
