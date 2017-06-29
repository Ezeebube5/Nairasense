import { StackNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';

// Screens
import TabTwoScreenOne from './views/TabTwoScreenOne';
import TabTwoScreenTwo from './views/TabTwoScreenTwo';
import TabTwoScreenThree from './views/TabTwoScreenThree';


const routeConfiguration = {
  TabTwoScreenOne: {
    screen: TabTwoScreenOne,
  },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
  TabTwoScreenThree: { screen: TabTwoScreenThree },
  //TabTwoScreenFour: { screen: TabTwoScreenFour },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabTwoScreenOne',
  headerMode: 'none',

  tabBarOptions: {
  // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'black',
    inactiveTintColor: 'white',
// background color is for the tab component
    activeBackgroundColor: 'green',
    inactiveBackgroundColor: 'white',
    style: {
      backgroundColor: Colors.in },
  },
};
export const NavigatorTabTwo = StackNavigator(routeConfiguration, tabBarConfiguration);
