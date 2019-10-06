import React, {Component} from "react";
import {ScrollView, View, Text, ART} from "react-native";
import {ProgressCircle} from "react-native-svg-charts";

import GMTile from "../../components/Blocks/GMTile";
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";

import styles from "./assets/styles/managerDashboardStyles";
import * as colors from "../../global/styles/colors";

export default class ManagerDashboard extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "GM Dashboard",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  };
  
  state = {
    activeColor: colors.blue,
    activePercentage: 0
  }

  setActiveStats = (activeColor, activePercentage) => {
    this.setState({
      activeColor,
      activePercentage
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.gmWrapper}>
        <View style={styles.gmDetails}>
          <View style={styles.gmChartWrapper}>
            <ProgressCircle
              style={styles.gmChart}
              progress={this.state.activePercentage / 100}
              cornerRadius={25}
              strokeWidth={25}
              progressColor={this.state.activeColor}
            >
              <View style={styles.gmChartData}>
                <Text style={styles.gmChartPercent}>{parseInt(this.state.activePercentage)}%</Text>
                <Text style={styles.gmChartLabel}>spendings</Text>
              </View>
            </ProgressCircle>
          </View>
        </View>
        <View style={styles.gmTitleWrapper}>
          <Text style={styles.gmTitle}>Statistics</Text>
        </View>
        <View style={styles.gmCardsWrapper}>
          <GMTile
            onPress={() => this.setActiveStats(colors.blue, 35)}
            color={colors.blue}
            title="Front Desk"
            percentage={35}
          />
          <GMTile
            onPress={() => this.setActiveStats(colors.red, 74)}
            color={colors.red}
            title="Maintenance"
            percentage={74}
          />
          <GMTile
            onPress={() => this.setActiveStats(colors.green, 61)}
            color={colors.green}
            title="Fitness Manager"
            percentage={61}
          />
          <GMTile
            onPress={() => this.setActiveStats(colors.mango, 19)}
            color={colors.mango}
            title="Sales"
            percentage={19}
          />
        </View>
      </ScrollView>
    );
  }
}
