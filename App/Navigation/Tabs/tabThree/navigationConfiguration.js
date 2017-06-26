import { TabNavigator } from 'react-navigation';
import { Colors } from '../../../Themes';
// Screens
import TabThreeScreenOne from './views/TabThreeScreenOne';
import TabThreeScreenTwo from './views/TabThreeScreenTwo';

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabThreeScreenOne',

    tabBarPosition: 'top',



tabBarOptions: {
  // tint color is passed to text and icons (if enabled) on the tab bar
  activeTintColor: 'black',
  inactiveTintColor: 'white',
// background color is for the tab component
  activeBackgroundColor: 'green',
  inactiveBackgroundColor: 'white',
  indicatorStyle: {
    backgroundColor: 'black'
  },
  style: {
  backgroundColor: Colors.in},
}
};

export const NavigatorTabThree = TabNavigator(routeConfiguration, tabBarConfiguration);
