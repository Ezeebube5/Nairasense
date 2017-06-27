import React from 'react';
import { Container, Content, Body, Text, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { View, ActivityIndicator, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../../Themes';
import { bindActionCreators } from 'redux';
import { getRepos, getRepoThunk, repoSelected } from '../../../../Redux/actions/index';

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
};

class TabTwoScreenOne extends React.Component {
  static navigationOptions = {
  headerTitle: 'Blog',
  headerTintColor: Colors.snow,
  // headerRight:
  //   <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}>
  //     <Icon name="list" size={30} />
  //   </Button>,
  headerLeft: <Button title="Menu" onPress={() =>navigate('DrawerOpen')}>
              <Icon name="list" size={30} />
                </Button>,
  headerStyle: {
    backgroundColor: Colors.in,
  },
  }

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
          <Content>
            <List
              dataArray={this.props.repos}
              renderRow={item =>
     (<ListItem onPress={() => {
       this.props.repoSelected(item);
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
  return bindActionCreators({ getRepos, getRepoThunk, repoSelected }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(TabTwoScreenOne);
