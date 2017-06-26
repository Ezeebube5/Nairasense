// React
import React, { PropTypes } from 'react';
// Redux
import { connect } from 'react-redux';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from './navigationConfiguration';

class TabBarNavigation extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
      />
    );
  }
}
const mapStateToProps = state => ({
  navigationState: state.tabBar,
});

TabBarNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(TabBarNavigation);
