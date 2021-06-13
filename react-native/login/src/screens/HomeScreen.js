import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { getUsers } from '../api/mock';

export default class HomeScreen extends Component {
  state = {
    users: [],
    hasLoadedUsers: false,
    userLoadErrMsg: '',
  };

  loadUsers = () => {
    this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
    getUsers()
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

  componentDidMount = () => {
    this.loadUsers();
  };  

  render = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        {this.state.users.map((user) => (
          <Text key={user.email}>{user.email}</Text>
        ))}
        <Button title="Log out" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  };
}