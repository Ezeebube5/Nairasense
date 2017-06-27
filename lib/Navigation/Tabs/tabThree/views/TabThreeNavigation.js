// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabThree } from '../navigationConfiguration';


class TabThreeNavigation extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Take Action',
    drawerIcon: ({ tintColor }) => <Icon size={20} name={'bank'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabThree
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
  navigationState: state.tabThree
  });

export default connect(mapStateToProps)(TabThreeNavigation);
