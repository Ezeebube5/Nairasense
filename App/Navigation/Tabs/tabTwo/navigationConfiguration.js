import { TabNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';
// Screens
import TabTwoScreenOne from './views/TabTwoScreenOne';
import TabTwoScreenTwo from './views/TabTwoScreenTwo';
import TabTwoScreenThree from './views/TabTwoScreenThree';


const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
  TabTwoScreenThree: { screen: TabTwoScreenThree },
  //TabTwoScreenFour: { screen: TabTwoScreenFour },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabTwoScreenOne',

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
export const NavigatorTabTwo = TabNavigator(routeConfiguration, tabBarConfiguration);
