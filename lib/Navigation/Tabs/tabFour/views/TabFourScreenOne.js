import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Body, H1,
           Header, Left, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
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

 class TabFourScreenOne extends React.Component {

  render() {
    return (
      <Container>
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
          <Title>Videos</Title>
        </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate('TabFourScreenTwo');
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
    <View style={styles.spinnerStyle}>
          <H1>Coming soon!</H1>
    </View>

      </Container>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ toggleDrawer, openPage }, dispatch);
}


export default connect(null, matchDispatchToProps)(TabFourScreenOne);
