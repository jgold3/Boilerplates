import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import { setToken } from '../api/token';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
    },
});

export default EmailForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const submit = () => {
        onSubmit(email, password)
            .then(async (res) => {
                await setToken(res.auth_token);
                onAuthentication();
            })
            .catch((res) => setErrMsg(res.error));
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity onPress={submit}>
                <Text>{buttonText}</Text>
            </TouchableOpacity>
            {errMsg ? <Text>{errMsg}</Text> : null}
            {children}
        </KeyboardAvoidingView>
    );
};