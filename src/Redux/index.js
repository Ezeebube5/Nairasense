import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import GitReducer from './gitReducer';
import ActiveRepo from './activeReducer';
import DrawerReducer from './drawerReducer';
import PageReducer from './pageReducer';

// Navigation
import { NavigatorTabOne } from '../Navigation/Tabs/tabOne/navigationConfiguration';
import { NavigatorTabTwo } from '../Navigation/Tabs/tabTwo/navigationConfiguration';
import { NavigatorTabThree } from '../Navigation/Tabs/tabThree/navigationConfiguration';
import { NavigatorTabFour } from '../Navigation/Tabs/tabFour/navigationConfiguration';
import { NavigatorTabFive } from '../Navigation/Tabs/tabFive/navigationConfiguration';
import { NavigatorTabSix } from '../Navigation/Tabs/tabSix/navigationConfiguration';
//import { Drawer } from '../Navigation/navigationConfiguration';


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navigation: require('./NavigationRedux').reducer,
    appState: require('./AppStateRedux').reducer,
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    repos: GitReducer,
    activeRepo: ActiveRepo,
    drawer: DrawerReducer,
    page: PageReducer,
//     {
//   const newState = TabBar.router.getStateForAction(action, state);
//   return newState || state;
// };
 // TabBar.router.getStateForAction(action, state),
    // drawer: (state, action) => {
    //   const newState = Drawer.router.getStateForAction(action, state);
    //   return newState || state;
    // },
    tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),
    tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action, state),
    tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action, state),
    tabFour: (state, action) => NavigatorTabFour.router.getStateForAction(action, state),
    tabFive: (state, action) => NavigatorTabFive.router.getStateForAction(action, state),
    tabSix: (state, action) => NavigatorTabSix.router.getStateForAction(action, state),
  });

  return configureStore(rootReducer, rootSaga);
};
