import { TabNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';
// Screens
import TabFourScreenOne from './views/TabFourScreenOne';
import TabFourScreenTwo from './views/TabFourScreenTwo';

const routeConfiguration = {
  TabFourScreenOne: { screen: TabFourScreenOne },
  TabFourScreenTwo: { screen: TabFourScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabFourScreenOne',

  tabBarPosition: 'top',


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
export const NavigatorTabFour = TabNavigator(routeConfiguration, tabBarConfiguration);
