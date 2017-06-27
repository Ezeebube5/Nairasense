import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Thumbnail, Body, Separator, Right, Switch } from 'native-base';
import LoginActions from '../../../../Redux/LoginRedux';

class TabFiveScreenTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile'}
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem >
              <Thumbnail square size={80} source={require('./pp.jpeg')} />
              <Body >
                <View style={styles.headerContentStyle}>
                  <Text>Shalom Chibuezeoke</Text>
                  <Text note>shasha@gmail.com</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem >
              <Text>Invite Friends</Text>
            </ListItem>

            <Separator bordered>
              <Text>Account</Text>
            </Separator>
            <ListItem >
              <Text>Edit Profile Picture</Text>
            </ListItem>
            <ListItem>
              <Text>Edit Email</Text>
            </ListItem>
            <ListItem last>
              <Text>Change Password</Text>
            </ListItem>
            <ListItem last>
              <Text>Communities</Text>
            </ListItem>
            <Separator bordered>
              <Text>Saved</Text>
            </Separator>
            <ListItem>
              <Text>Articles</Text>
            </ListItem>
            <ListItem>
              <Text>Videos</Text>
            </ListItem>
            <ListItem last>
              <Text>Podcasts</Text>
            </ListItem>
            <Separator bordered>
              <Text>Settings</Text>
            </Separator>
            <ListItem icon>
              <Body>
                <Text>Push Notifications</Text>
              </Body>
              <Right>
                <Switch value />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Night Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Save Password</Text>
              </Body>
              <Right>
                <Switch value />
              </Right>
            </ListItem>
            <Separator bordered>
              <Text>Help & Feedback</Text>
            </Separator>
            <ListItem>
              <Text>Help</Text>
            </ListItem>
            <ListItem>
              <Text>Contact Us</Text>
            </ListItem>
            <ListItem>
              <Text>About</Text>
            </ListItem>
            <Separator bordered>
              <Text />
            </Separator>
            <ListItem onPress={this.props.logout}>
              <Text>Logout</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    marginLeft: 20,

  } };

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LoginActions.logout()),
});

export default connect(null, mapDispatchToProps)(TabFiveScreenTwo);
