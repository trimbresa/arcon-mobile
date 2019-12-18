import React, {useState, useEffect, useCallback, useMemo} from "react";
import {View, FlatList, Text, RefreshControl} from "react-native";
import moment from "moment";
import {withNavigation} from "react-navigation";
import ScheduleDetails from "../../components/Schedule/ScheduleDetails";
import {connect} from "react-redux";
import * as actions from "./actions";
import {ActivityIndicator} from "react-native-paper";
import * as colors from "../../global/styles/colors";
import AgendaCard from "../../components/Schedule/AgendaCard/AgendaCard";
import {SCHEDULE_TABS} from "../../global/constants";

const AllEvents = ({
  navigation: {getParam},
  schedules,
  haveAllSchedulesLoaded,
  loading,
  error,
  refreshing,
  fetchDaySchedules,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [page, setPage] = useState(1);

  const date = useMemo(() => moment(getParam("date")), [getParam]);
  const type = useMemo(() => moment(getParam("type")), [getParam]);

  useEffect(() => {
    fetchDaySchedules({date, page, refreshing: true, type});
  }, [date]);

  const emptyComponent = useMemo(
    () =>
      !loading && !error && !schedules.length ? (
        <Text>No new posts to show.</Text>
      ) : (
        !loading &&
        error && (
          <Text style={{padding: 15}}>
            Couldn't load your data. Try again later!
          </Text>
        )
      ),
    [loading, error, schedules],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListFooterComponent={
          !haveAllSchedulesLoaded ? (
            <View
              style={{
                width: "100%",
                paddingVertical: 20,
                alignItems: "center",
              }}>
              <ActivityIndicator />
            </View>
          ) : (
            <View />
          )
        }
        contentInsetAdjustmentBehavior="automatic"
        onEndReachedThreshold={0.01}
        onEndReached={e => {
          setPage(page + 1);
          fetchDaySchedules({date, page: page + 1, type});
        }}
        data={schedules}
        extraData={schedules}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setPage(1);
              fetchDaySchedules({date, refreshing: true, type});
            }}
            refreshing={refreshing}
            color={colors.primaryColor}
            colors={[colors.primaryColor]}
          />
        }
        initialNumToRender={4}
        ListEmptyComponent={emptyComponent}
        renderItem={({item, index}) => {
          return (
            <AgendaCard
              item={item}
              onItemPressed={item => {
                setSelectedItem(item);
                setDetailsVisible(true);
              }}
              isFirst={false}
              type={SCHEDULE_TABS.EMPLOYEE_SCHEDULE}
            />
          );
        }}
        keyExtractor={item => `${item.id}`}
      />
      <ScheduleDetails
        mapJobs={{}}
        mapLocations={{}}
        schedule={selectedItem}
        onRequestClose={() => setDetailsVisible(false)}
        visible={detailsVisible}
      />
    </View>
  );
};

AllEvents.navigationOptions = ({navigation: {getParam}}) => ({
  headerTitle: moment(getParam("date")).format("DD MMMM"),
  headerRight: null,
});

export default connect(
  ({allEventsReducer}) => allEventsReducer,
  actions,
)(withNavigation(AllEvents));
