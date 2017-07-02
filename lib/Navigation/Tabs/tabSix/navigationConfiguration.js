import { StackNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';
// Screens
import TabSixScreenOne from './views/TabSixScreenOne';
import TabSixScreenTwo from './views/TabSixScreenTwo';

const routeConfiguration = {
  TabSixScreenOne: { screen: TabSixScreenOne },
  TabSixScreenTwo: { screen: TabSixScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabSixScreenOne',
  headerMode: 'none',

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
export const NavigatorTabSix = StackNavigator(routeConfiguration, tabBarConfiguration);
