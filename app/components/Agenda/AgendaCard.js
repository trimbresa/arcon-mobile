import React, {Component, Fragment} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import _ from "lodash";
import moment from "moment";

import {STATUS_COLORS, STATUS_TEXT_COLORS} from "./statusConstants";

// Styles
import scheduleStyles from "./assets/styles/agendaStyles";
import * as colors from "../../global/styles/colors";

function AgendaCard({item, onItemPressed, mapJobs}) {
  const {startDate, endDate, name, breaks, jobId, status} = item;

  const duration = Number(
    moment.duration(moment(endDate).diff(startDate)).asHours(),
  ).toFixed(1);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onItemPressed(item)}
      style={scheduleStyles.item}>
      <View style={scheduleStyles.itemDurationWrapper}>
        <Text style={scheduleStyles.itemHourText}>
          {moment(startDate).format("hh:mm a")}
        </Text>
        <Text style={scheduleStyles.itemDurationText}>{duration} h</Text>
        <Text style={scheduleStyles.itemHourText}>
          {moment(endDate).format("hh:mm a")}
        </Text>
      </View>

      <View style={scheduleStyles.itemInfoWrapper}>
        <Text style={scheduleStyles.itemTitleText} numberOfLines={1}>
          {name}
        </Text>

        <Text style={scheduleStyles.itemRoleText} numberOfLines={1}>
          {mapJobs[jobId] || ""}
        </Text>

        <Text
          style={[
            scheduleStyles.itemStatus,
            {
              backgroundColor:
                status == "approved"
                  ? STATUS_COLORS[name]
                  : STATUS_COLORS[status],
              color: STATUS_TEXT_COLORS[status == "approved" ? name : status]
                ? colors.black
                : colors.white,
            },
          ]}
          numberOfLines={1}>
          {status}
        </Text>
      </View>

      {breaks > 0 && (
        <Text style={scheduleStyles.itemBreakText}>Break {breaks}m</Text>
      )}
    </TouchableOpacity>
  );
}

export default AgendaCard;
