import { NavigationActions } from 'react-navigation';
// import { PrimaryNav } from '../Navigation/AppNavigation';
// import { Toggle_Drawer } from './actions';
import { Drawer } from '../Navigation/navigationConfiguration';

// const { navigate } = NavigationActions;
// const { getStateForAction } = PrimaryNav.router;


const initialNavState = Drawer.router.getStateForAction(
  Drawer.router.getActionForPathAndParams('DrawerClose'));

export default function (state = initialNavState, action) {
  switch (action.type) {
    case 'Toggle_Drawer': {
      const navigationAction = NavigationActions.navigate({
        routeName: state.routes[state.index].routeName === 'DrawerOpen' ? 'DrawerClose' : 'DrawerOpen',
      });

      return Drawer.router.getStateForAction(navigationAction, state);
    }
    default:
      return Drawer.router.getStateForAction(action, state) || state;
  }
}
