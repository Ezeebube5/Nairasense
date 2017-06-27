// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabFive } from '../navigationConfiguration';


class TabFiveNavigation extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Forum',
    drawerIcon: ({ tintColor }) => <Icon size={20} name={'group'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabFive
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
  navigationState: state.tabFive
  });

export default connect(mapStateToProps)(TabFiveNavigation);
