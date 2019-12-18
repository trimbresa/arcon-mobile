import React, {Component} from "react";
import {SafeAreaView, StatusBar, View} from "react-native";
import {connect} from "react-redux";
import {createStackNavigator} from "react-navigation-stack";
import Agenda from "../../components/Schedule/Agenda";
import _ from "lodash";
import * as actions from "./actions";
import {fetchLocations} from "../Dashboard/actions";
import moment from "moment";
import {primaryFontBold} from "../../global/styles/fonts";
import FAB from "../../components/Schedule/FAB";
import Filters from "../../components/Schedule/Filters";
import AllEvents from "../AllEvents";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

// Styles
import scheduleStyles from "./assets/styles/scheduleStyles";
import * as colors from "../../global/styles/colors";
import ScheduleDetails from "../../components/Schedule/ScheduleDetails";
import ScheduleTypeSwitch from "../../components/Schedule/ScheduleTypeSwitch/ScheduleTypeSwitch";
import {SCHEDULE_TABS as TABS} from "../../global/constants";
import StorageManager from "../../helpers/StorageManager";

const initialFilters = {
  employees: [],
  departments: [],
  locations: [],
  jobs: [],
};

class Schedule extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontFamily: primaryFontBold,
    },
  };

  state = {
    activeDate: moment(),
    filters: initialFilters,
    selectedItem: null,
    activeTab: TABS.MY_SCHEDULE,
    detailsVisible: false,
    filtersVisible: false,
    showSelected: false,
    userRole: "employee",
  };

  onItemPressed = item => {
    this.setState({selectedItem: item, detailsVisible: true});
  };

  openFilters = () => {
    this.setState({filtersVisible: true});
  };

  onApplyFilters = filters => {
    this.setState({filtersVisible: false, filters}, this.fetchSchedules);
  };

  fetchSchedules = (refreshing = false) => {
    const {activeTab: type, activeDate: date, filters} = this.state;
    this.props.fetchSchedules({
      type,
      date,
      filters,
      refreshing,
    });
  };

  async componentDidMount() {
    const {
      locations,
      departments,
      jobs,
      fetchLocations,
      fetchDepartments,
      fetchJobs,
    } = this.props;
    if (locations.length === 0) fetchLocations();
    if (departments.length === 0) fetchDepartments();
    if (jobs.length === 0) fetchJobs();

    const {role: userRole} = await StorageManager.get("user");
    this.setState({userRole});
  }

  render() {
    const {
      schedules,
      loading,
      mapJobs,
      mapLocations,
      locations,
      departments,
      jobs,
      navigation,
    } = this.props;

    const {
      detailsVisible,
      filtersVisible,
      selectedItem,
      activeTab,
      filters,
      showSelected,
      userRole,
    } = this.state;

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

        <SafeAreaView style={scheduleStyles.scheduleSafarea}>
          <ScheduleTypeSwitch
            userRole={userRole}
            activeTab={activeTab}
            onSwitch={activeTab =>
              this.setState({activeTab}, () => this.fetchSchedules(true))
            }
          />

          <Agenda
            type={activeTab}
            onDayChange={d => this.setState({activeDate: moment(d.dateString)})}
            showAll={date =>
              navigation.navigate("AllEvents", {date, type: activeTab})
            }
            mapJobs={mapJobs}
            mapLocations={mapLocations}
            onItemPressed={this.onItemPressed}
            items={schedules}
            loadItemsForMonth={date => {
              this.setState(
                {activeDate: moment(date.dateString)},
                this.fetchSchedules,
              );
            }}
            displayLoadingIndicator={loading}
            onRefresh={() => this.fetchSchedules(true)}
            refreshing={loading}
          />

          <FAB
            selected={Object.values(filters).reduce((a, b) => a + b.length, 0)}
            visible={activeTab === TABS.EMPLOYEE_SCHEDULE}
            onPress={() => this.setState({filtersVisible: true})}
            onPressSelected={() =>
              this.setState({showSelected: true}, () =>
                this.setState({filtersVisible: true}),
              )
            }
          />

          <ScheduleDetails
            mapJobs={mapJobs}
            mapLocations={mapLocations}
            schedule={selectedItem}
            onRequestClose={() => this.setState({detailsVisible: false})}
            visible={detailsVisible}
            type={activeTab}
          />

          <Filters
            filters={filters}
            departments={departments}
            jobs={jobs}
            locations={locations}
            showSelected={showSelected}
            visible={filtersVisible}
            onApply={this.onApplyFilters}
            onClearAll={() =>
              this.setState({filters: initialFilters}, this.fetchSchedules)
            }
            onChangeShowSelected={async s => this.setState({showSelected: s})}
            onRequestClose={() => this.setState({filtersVisible: false})}
          />
        </SafeAreaView>
      </View>
    );
  }
}

// Connect with redux
const ScheduleContainer = connect(
  ({scheduleReducer, dashboardReducer: {locations}}) => {
    return {
      ...scheduleReducer,
      locations,
    };
  },
  {...actions, fetchLocations},
)(Schedule);

const ScheduleRouter = createStackNavigator(
  {
    MySchedule: ScheduleContainer,
    AllEvents,
  },
  {
    initialRouteName: "MySchedule",
    mode: "modal",
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerTitleStyle: {
          fontFamily: primaryFontBold,
        },
        title: "Schedule",
        headerRight: <NotificationsBtn navigation={navigation} />,
      };
    },
  },
);

export default ScheduleRouter;
