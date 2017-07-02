import { StackNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';
// Screens
import TabFiveScreenOne from './views/TabFiveScreenOne';
import TabFiveScreenTwo from './views/TabFiveScreenTwo';

const routeConfiguration = {
  TabFiveScreenOne: { screen: TabFiveScreenOne },
//  TabFiveScreenTwo: { screen: TabFiveScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabFiveScreenOne',
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
export const NavigatorTabFive = StackNavigator(routeConfiguration, tabBarConfiguration);
