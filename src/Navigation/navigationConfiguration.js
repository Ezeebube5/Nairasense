import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../Themes';
// Tab-Navigators
import TabOneNavigation from './Tabs/tabOne/views/TabOneNavigation';
import TabTwoNavigation from './Tabs/tabTwo/views/TabTwoNavigation';
import TabThreeNavigation from './Tabs/tabThree/views/TabThreeNavigation';
import TabFourNavigation from './Tabs/tabFour/views/TabFourNavigation';
import TabFiveNavigation from './Tabs/tabFive/views/TabFiveNavigation';

const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
  TabFourNavigation: { screen: TabFourNavigation },
  TabFiveNavigation: { screen: TabFiveNavigation },
};

const drawerConfiguration = {
  // ...other configs

  // tabBarPosition: 'bottom',
  // swipeEnabled: false,
  // animationEnabled: false,
  drawerWidth: 200,
//  drawerPosition: 'right',
  contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,


  contentOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'black',
    inactiveTintColor: 'green',
// background color is for the tab component
    activeBackgroundColor: 'green',
    inactiveBackgroundColor: 'white',
    indicatorStyle: {
      backgroundColor: Colors.in,
    },
    style: {
      backgroundColor: Colors.in },
    showIcon: true,
    showLabel: false,
  },

};
export const Drawer = DrawerNavigator(routeConfiguration, drawerConfiguration);
