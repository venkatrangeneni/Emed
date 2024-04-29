// Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const { width } = Dimensions.get('window');

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here, such as calling an API
        console.log('Username:', username);
        console.log('Password:', password);
        // You can add your logic to validate credentials and navigate to another screen upon successful login
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here, such as navigating to the forgot password screen
        console.log('Forgot Password clicked');
    };

    const handleSignUpPress = () => {
        // Navigate to the Signuppage screen
        navigation.navigate('Signuppage');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.createText}>Login</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.header}>
                <Text>Doesn't have an account? <Text style={styles.signupText} onPress={handleSignUpPress}>Sign Up</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        width: 300,
        height: 40,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        marginTop: 25,
        paddingHorizontal: 10,
        borderRadius:3,
    },
    button: {
        backgroundColor: "#47A0E9",
        padding: 10,
        marginTop: 25,
        width: 300,
        height: 45,
        borderRadius:3,
    },
    buttonText: {
        textAlign: "center",
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    header: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: "left",
        width: 320,
        paddingHorizontal: 10,
    },
    createText: {
        fontWeight: "500",
        fontSize: 20,
    },
    forgotPasswordText: {
        marginTop:7,
        color: "#47A0E9",
        fontWeight:"500",
        textDecorationLine: 'underline',
        textAlign: "left",
        width: 320,
        paddingHorizontal: 10,
    },
    signupText: {
        color:  "#47A0E9",
        fontWeight:"600",
       // textDecorationLine: 'underline',
    },
});

export default Login;
