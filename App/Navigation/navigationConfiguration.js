import { TabNavigator } from 'react-navigation';
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

const tabBarConfiguration = {
  // ...other configs

  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,


  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'black',
    inactiveTintColor: 'white',
// background color is for the tab component
    activeBackgroundColor: 'white',
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
export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);
