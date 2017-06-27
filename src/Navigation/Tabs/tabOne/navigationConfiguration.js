import { TabNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';
// Screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabOneScreenOne',

  tabBarPosition: 'top',

  animationEnabled: false,

  tabBarOptions: {
  // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'black',
    inactiveTintColor: 'white',
// background color is for the tab component
    activeBackgroundColor: 'green',
    inactiveBackgroundColor: 'white',
    indicatorStyle: {
      backgroundColor: 'black',
    },
    style: {
      backgroundColor: Colors.in },
  },
};
export const NavigatorTabOne = TabNavigator(routeConfiguration, tabBarConfiguration);
