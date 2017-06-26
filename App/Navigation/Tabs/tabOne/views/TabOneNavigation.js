// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from '../navigationConfiguration';


class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name={'home'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabOne
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
  navigationState: state.tabOne
  });

export default connect(mapStateToProps)(TabOneNavigation);
