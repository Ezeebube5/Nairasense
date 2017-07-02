import React from 'react';
import { Body, Header, Left, Right, Button, Title } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Colors } from '../../../../Themes';
import { toggleDrawer, openPage } from '../../../../Redux/actions/index';


const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 120,
    flex: 1,
    width: null,
  },
  icon: {
    color: 'white',
  },
};


class TabFiveScreenOne extends React.Component {

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',

        }}
      >
        <Header
          backgroundColor={Colors.in}
          iosBarStyle="default"
          androidStatusBarColor={Colors.statusBar}
        >
          <Left>
            <Button transparent onPress={() => { this.props.toggleDrawer(); }}>
              <Icon
                name="list"
                size={30}
                style={styles.icon}
              />
            </Button>
          </Left>
          <Body>
            <Title>Blog</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.props.openPage('TabTwoScreenTwo');
              }
      }
            >
              <Icon
                name="arrow-right"
                size={30}
                style={styles.icon}
              />
            </Button>
          </Right>
        </Header>

        <Text>{ 'Forum on the way' }</Text>
      </View>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ toggleDrawer, openPage }, dispatch);
}


export default connect(null, matchDispatchToProps)(TabFiveScreenOne);
