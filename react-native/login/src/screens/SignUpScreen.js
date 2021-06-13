import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { createAccount } from '../api/mock';

const SignUpScreen = ({navigation}) => {
  const [errorMsg, setErrorMsg] = useState('');
  const createUser = () => {
    setErrorMsg('');
    createAccount('test@test.ca', 'password')
      .then((val) => {
        navigation.navigate('Home');
      })
      .catch((err) => setErrorMsg(''));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create an Account</Text>
      <Button title="Sign Up" onPress={createUser} />
      <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </View>
  );
}

export default SignUpScreen;