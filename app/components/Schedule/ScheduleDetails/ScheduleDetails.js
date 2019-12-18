import React from "react";
import {View, Modal, Text, TouchableOpacity, ScrollView} from "react-native";
import scheduleDetailsStyles from "./assets/styles/scheduleDetailsStyles";
import moment from "moment";
import Icon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import * as colors from "../../../global/styles/colors";
import {STATUS_COLORS, STATUS_TEXT_COLORS} from "../statusConstants";
import {SCHEDULE_TABS} from "../../../global/constants";

const ScheduleDetails = ({
  visible,
  onRequestClose,
  schedule,
  mapJobs,
  mapLocations,
  type,
}) => {
  if (!schedule) return null;

  const {
    name,
    status,
    startDate,
    endDate,
    jobId,
    jobName,
    breakData,
    firstName,
    lastName,
    locationId,
    locationName,
  } = schedule;
  const breaks = JSON.parse(breakData);

  return (
    <Modal
      transparent={true}
      onRequestClose={onRequestClose}
      visible={visible}
      animationType="slide"
      animated={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onRequestClose()}
        style={scheduleDetailsStyles.overlay}>
        <TouchableOpacity
          activeOpacity={1}
          style={scheduleDetailsStyles.container}>
          <View style={scheduleDetailsStyles.topContainer}>
            <Text style={scheduleDetailsStyles.titleText}>{name}</Text>

            {(jobId || jobName) && (
              <Text style={scheduleDetailsStyles.jobText}>
                {mapJobs[jobId] || jobName}
              </Text>
            )}

            <Text style={scheduleDetailsStyles.jobText} numberOfLines={1}>
              {mapLocations[locationId] || locationName}
            </Text>

            {type === SCHEDULE_TABS.EMPLOYEE_SCHEDULE && (
              <Text
                numberOfLines={1}
                style={
                  scheduleDetailsStyles.usernameText
                }>{`${firstName} ${lastName}`}</Text>
            )}
          </View>

          <ScrollView contentContainerStyle={scheduleDetailsStyles.list}>
            <Text
              style={[
                scheduleDetailsStyles.status,
                {
                  backgroundColor:
                    status == "approved"
                      ? STATUS_COLORS[name]
                      : STATUS_COLORS[status],
                  color: STATUS_TEXT_COLORS[
                    status == "approved" ? name : status
                  ]
                    ? colors.black
                    : colors.white,
                },
              ]}
              numberOfLines={1}>
              {status}
            </Text>

            <View style={scheduleDetailsStyles.date}>
              <Icon name="calendar" size={20} color={colors.darkGrey} />
              <Text style={scheduleDetailsStyles.dateText}>
                {moment(startDate).format("DD MMMM")}
              </Text>
            </View>

            <View style={scheduleDetailsStyles.time}>
              <Icon name="clock" size={20} color={colors.darkGrey} />
              <Text style={scheduleDetailsStyles.dateText}>
                {moment(startDate).format("hh:mm a")}
              </Text>

              <Icon
                name="arrow-right"
                size={18}
                color={colors.darkGrey}
                style={{marginHorizontal: 12}}
              />

              <Icon name="clock" size={20} color={colors.darkGrey} />
              <Text style={scheduleDetailsStyles.dateText}>
                {moment(endDate).format("hh:mm a")}
              </Text>
            </View>

            {breaks.length > 0 && (
              <React.Fragment>
                <Text style={scheduleDetailsStyles.breakTitleText}>Breaks</Text>
                {breaks.map((b, i) => {
                  return (
                    <View key={`${i}`} style={scheduleDetailsStyles.break}>
                      <IonIcon
                        name="ios-stopwatch"
                        size={20}
                        color={colors.grey}
                      />
                      <View style={scheduleDetailsStyles.breakInfo}>
                        <Text style={scheduleDetailsStyles.breakText}>
                          {moment(
                            startDate.split(" ")[0] + " " + b.start,
                          ).format("hh:mm a")}
                        </Text>

                        <Icon
                          name="arrow-right"
                          style={scheduleDetailsStyles.breakArrow}
                        />

                        <Text
                          style={[
                            scheduleDetailsStyles.breakText,
                            // {textAlign: "right"},
                          ]}>
                          {moment(startDate.split(" ")[0] + " " + b.end).format(
                            "hh:mm a",
                          )}
                        </Text>
                      </View>

                      <Text style={scheduleDetailsStyles.breakDurationText}>
                        {b.duration} minutes
                      </Text>
                    </View>
                  );
                })}
              </React.Fragment>
            )}
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ScheduleDetails;
