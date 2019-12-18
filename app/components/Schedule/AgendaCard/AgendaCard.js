import React, {Component, Fragment} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import _ from "lodash";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

import {STATUS_COLORS, STATUS_TEXT_COLORS} from "../statusConstants";
import {SCHEDULE_TABS} from "../../../global/constants";

// Styles
import agendaCardStyles from "./assets/styles/agendaCardStyles";
import * as colors from "../../../global/styles/colors";

const AgendaCard = ({
  item,
  onItemPressed,
  mapJobs = {},
  mapLocations = {},
  isFirst,
  showAll,
  type,
}) => {
  const {
    startDate,
    endDate,
    name,
    breaks,
    jobId,
    status,
    jobName,
    extra,
    firstName,
    lastName,
    locationId,
    locationName,
  } = item;

  const username = `${firstName} ${lastName}`;

  const duration = Number(
    moment.duration(moment(endDate).diff(startDate)).asHours(),
  ).toFixed(1);

  return (
    <View
      style={[
        agendaCardStyles.container,
        isFirst && agendaCardStyles.firstItem,
      ]}>
      {isFirst && !!extra && (
        <TouchableOpacity onPress={showAll} style={agendaCardStyles.showAllBtn}>
          <Text style={agendaCardStyles.showAllText}>Show {extra} more</Text>
          <Icon name="md-arrow-forward" size={18} color={colors.primaryColor} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onItemPressed(item)}
        style={agendaCardStyles.item}>
        <View style={agendaCardStyles.itemDurationWrapper}>
          <Text style={agendaCardStyles.itemHourText}>
            {moment(startDate).format("hh:mm a")}
          </Text>
          <Text style={agendaCardStyles.itemDurationText}>{duration} h</Text>
          <Text style={agendaCardStyles.itemHourText}>
            {moment(endDate).format("hh:mm a")}
          </Text>
        </View>

        <View style={agendaCardStyles.itemInfoWrapper}>
          <Text style={agendaCardStyles.itemTitleText} numberOfLines={1}>
            {name}
          </Text>

          <Text style={agendaCardStyles.itemRoleText} numberOfLines={1}>
            {mapJobs[jobId] || jobName}
          </Text>

          <Text style={agendaCardStyles.itemRoleText} numberOfLines={1}>
            {mapLocations[locationId] || locationName}
          </Text>

          <View style={agendaCardStyles.secondaryInfo}>
            <Text
              style={[
                agendaCardStyles.itemStatus,
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

            {type === SCHEDULE_TABS.EMPLOYEE_SCHEDULE && (
              <Text numberOfLines={1} style={agendaCardStyles.itemUser}>
                {username}
              </Text>
            )}
          </View>
        </View>

        {breaks > 0 && (
          <Text style={agendaCardStyles.itemBreakText}>Break {breaks}m</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AgendaCard;
