// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from '../navigationConfiguration';


class TabTwoNavigation extends React.Component {
  static navigationOptions = {

    drawerLabel: 'Blog',
    drawerIcon: ({ tintColor }) => <Icon size={20} name={'file-text'} color={tintColor} />
  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabTwo
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
  navigationState: state.tabTwo
  });

export default connect(mapStateToProps)(TabTwoNavigation);
