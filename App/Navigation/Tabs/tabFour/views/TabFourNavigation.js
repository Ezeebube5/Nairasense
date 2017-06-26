// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabFour } from '../navigationConfiguration';


class TabFourNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'media',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name={'film'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabFour
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
  navigationState: state.tabFour
  });

export default connect(mapStateToProps)(TabFourNavigation);
