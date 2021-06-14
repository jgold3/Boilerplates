import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { getUsers } from '../api/mock';
import { setToken } from '../api/token';

export default class HomeScreen extends Component {
  state = {
    users: [],
    hasLoadedUsers: false,
    userLoadErrMsg: '',
  };

  loadUsers = () => {
    this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
    getUsers() // Pass False to test invalid auth token
      .then(res => this.setState({users: res.users, hasLoadedUsers: true}))
      .catch(this.handleUserLoadErr);
  };

  handleUserLoadErr = (res) => {
    if (res.error === 401) {
      this.props.navigation.navigate('Login');
    } else {
      this.setState({hasLoadedUsers: false, userLoadErrMsg: res.message})
    }
  };

  logOut = async () => {
    this.setState({hasLoadedUsers: false, users: []})
    await setToken('');
    this.props.navigation.navigate('Login');
  };

  componentDidMount = () => {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus', 
      () => {
        if (!this.state.hasLoadedUsers) {
          this.loadUsers();
        }
      },
    );
  };  

  componentWillUnmount = () => {
    this.didFocusSubscription.remove();
  }

  render = () => {
    const {users, userLoadErrMsg} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        {users.map((user) => (
          <Text key={user.email}>{user.email}</Text>
        ))}
        {userLoadErrMsg ? (<Text>{userLoadErrMsg}</Text>) : null}
        <Button title="Log out" onPress={this.logOut} />
      </View>
    );
  };
}