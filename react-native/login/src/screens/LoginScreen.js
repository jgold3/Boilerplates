import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { login } from '../api/mock';

const LoginScreen = ({navigation}) => {
  const [errorMsg, setErrorMsg] = useState('');
  const loginUser = () => {
    setErrorMsg('');
    login('test@test.ca', 'password')
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => setErrorMsg(err.message));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LoginScreen</Text>
      <Button title="Log in" onPress={loginUser} />
      <Button title="Create account" onPress={() => navigation.navigate('SignUp')} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </View>
  );
}

export default LoginScreen;