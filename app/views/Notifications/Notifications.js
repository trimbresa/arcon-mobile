import React, {Component, Fragment} from "react";
import {SafeAreaView, StatusBar, SectionList} from "react-native";
import {createStackNavigator, HeaderBackButton} from "react-navigation-stack";

// Components
import SectionTitle from "../../components/Blocks/SectionTitle";
import SectionItem from "../../components/Blocks/SectionItem";

// Styles
import notificationsStyles from "./assets/styles/notificationsStyles";

// Dummy data
import DATA from "./dummyData";

class Notifications extends Component {
  static navigationOptions = ({navigation}) => {
    let {params} = navigation.state;

    return {
      title: "Notifications",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      ...params,
    };
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={notificationsStyles.notificationsSafeArea}>
          <SectionList
            sections={DATA}
            contentContainerStyle={notificationsStyles.notificationsWrapper}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <SectionItem
                author={item.author}
                title={item.title}
                type={item.type}
                timeStamp={item.createdTime}
                newNotif={item.unread}
                scheduleInfo={item.scheduleInfo}
                approved={item.approved}
              />
            )}
            renderSectionHeader={({section: {title}}) => (
              <SectionTitle title={title} />
            )}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const NotificationsRouter = createStackNavigator({
  Notifications,
});

export default NotificationsRouter;
