import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../../Themes';
import { bindActionCreators } from 'redux';
import { getRepos, getRepoThunk, repoSelected, toggleDrawer } from '../../../../Redux/actions/index';

 class TabThreeScreenOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Saving'}
  render() {
    return (
      <View
style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Text>{ 'Tab Three Screen One' }</Text>
        <TouchableOpacity
          onPress= {() =>
            {this.props.toggleDrawer();
            console.log('item');}
        }>
          <Icon name="list"
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({  repoSelected, toggleDrawer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TabThreeScreenOne);
