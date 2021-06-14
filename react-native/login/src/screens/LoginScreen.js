import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { login } from '../api/mock';
import EmailForm from '../forms/EmailForm';

const LoginScreen = ({navigation}) => {
 

  return (
    <EmailForm
      buttonText="Login"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button title="Create account" onPress={() => navigation.navigate('SignUp')} />
    </EmailForm>
  );
}

export default LoginScreen;