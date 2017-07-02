import { NavigationActions } from 'react-navigation';
import { NavigatorTabTwo } from '../Navigation/Tabs/tabTwo/navigationConfiguration';


export default function (state = null, action) {
  switch (action.type) {
    case 'Open_Page': {
      const navigationAction = NavigationActions.navigate({
        routeName: action.payload,
      });
      console.log('Open Page');
      return NavigatorTabTwo.router.getStateForAction(navigationAction, state);
    }
    default:
      return NavigatorTabTwo.router.getStateForAction(action, state) || state;
  }
}
