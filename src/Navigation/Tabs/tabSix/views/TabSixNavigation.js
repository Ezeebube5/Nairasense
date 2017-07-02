// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabSix } from '../navigationConfiguration';


class TabSixNavigation extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => <Icon size={20} name={'user'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabSix
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState
          })
        }
      />
    );
  }
}
const mapStateToProps = (state) => ({
  navigationState: state.tabSix
  });

export default connect(mapStateToProps)(TabSixNavigation);
