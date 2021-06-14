import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { createAccount } from '../api/mock';
import EmailForm from '..'

const SignUpScreen = ({navigation}) => {
  return (
    <EmailForm
      buttonText="Sign Up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button title="Back to Log in" onPress={() => navigation.navigate('Login')} />
    </EmailForm>
  );  
}

export default SignUpScreen;