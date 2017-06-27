// React
import React, { PropTypes } from 'react';
// Redux
import { connect } from 'react-redux';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { Drawer } from './navigationConfiguration';

class DrawerNavigation extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <Drawer
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
  navigationState: state.drawer,
});

DrawerNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(DrawerNavigation);
