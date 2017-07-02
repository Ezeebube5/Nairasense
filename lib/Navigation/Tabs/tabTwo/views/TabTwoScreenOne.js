//     

import React from 'react';
import { bindActionCreators } from 'redux';
import { Container, Content, Body, Text, List, ListItem,
           Header, Left, Right, Button, Title } from 'native-base';
import { connect } from 'react-redux';
import { View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../../Themes';

import { getRepos, getRepoThunk, repoSelected, toggleDrawer, openPage } from '../../../../Redux/actions/index';

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

class TabTwoScreenOne extends React.Component {

 // static navigationOptions = {
 //    headerTitle: 'Blog',
  //   headerTintColor: Colors.snow,
  //
  //   headerLeft:
  // <TouchableOpacity
  //   onPress= {() => {this.props.navigation.navigate('DrawerOpen');}}
  // >
  //   <Icon name="list"
  //     size={30}
  //   style={styles.icon} />
  // </TouchableOpacity>,
  //
  //
  //
  //   headerStyle: {
  //     backgroundColor: Colors.in,
  //   },
  // }

  componentWillMount() {
    this.props.getRepoThunk();
  }

  render() {
    if (this.props.repos.length === 0) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else if (this.props.repos.length !== 0) {
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
              <Title>Blog</Title>
            </Body>
            <Right>
            <Button transparent
              onPress= {() => {
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
          <Content>
            <List
              dataArray={this.props.repos}
              renderRow={item =>
     (<ListItem
       // implement this//
       onPress={() => {
         this.props.repoSelected(item);
    //  this.props.openPage('TabTwoScreenTwo');
     }}
     >


       <Body>
         <Image
           style={styles.imageStyle}
           source={require('./Tithe.jpg')}
         />
         <Text>{item.title.rendered}</Text>
         <Text>{item.date}</Text>
         <Text note>{item.excerpt.rendered}</Text>
         <TouchableOpacity
           onPress={() => {
             this.props.repoSelected(item);
             this.props.openPage('TabTwoScreenTwo');
           }
         }
         >
           <Icon name="list"
             size={30}
           style={styles.icon} />
         </TouchableOpacity>
       </Body>
     </ListItem>)}
            />

          </Content>
        </Container>);
    }
  }
}


function mapStateToProps(state) {
  return {
    repos: state.repos,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getRepos, getRepoThunk, repoSelected, toggleDrawer, openPage }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(TabTwoScreenOne);
