// Signuppage.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Signuppage = ({ label, passwordLabel, confirmPasswordLabel, onFocus = () => {}, ...props }) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUpPress = () => {
        if (!email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        navigation.replace('Tabnavigation');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.header}>
                    <Text style={styles.createText}>Create your Account</Text>
                </View>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    onChangeText={setEmail}
                    value={email}
                    onFocus={onFocus}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{passwordLabel}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    onFocus={onFocus}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{confirmPasswordLabel}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm password"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                    onFocus={onFocus}
                />
            </View>
            <TouchableOpacity onPress={handleSignUpPress} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.orsign}>
                <Text style={styles.orsignText}>- Or Sign up with -</Text>
            </View>
            <View style={styles.socialLogin}>
                <TouchableOpacity onPress={() => console.log("Sign up with Google pressed")} style={styles.Googleicon}>
                    <Image
                        source={require('./images/google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Sign up with mobile pressed")} style={styles.Googleicon}>
                    <MaterialIcon name="smartphone" size={30} color="#47A0E9" />
                </TouchableOpacity>
            </View>
            <View style={styles.login}>
                <Text>Already have an account? <Text style={styles.Logintext}>Log In</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? 85 : 0,
    },
    createText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer:{
       // marginBottom:20,
    },
    label: {
        fontSize: 14,
        color: "grey",
    },
    input: {
        height: 40,
        width:310,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#47A0E9",
        padding: 10,
        height: 40,
        width:310,
        alignItems: "center",
        borderRadius: 5,
       // marginBottom: 10,
       marginTop:20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    socialLogin: {
        flexDirection: "row",
        justifyContent: "center",
        columnGap:50,
    },
    orsign:{
        fontSize: 20,
        padding:13,
    },
    Googleicon: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        paddingHorizontal:35,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    login:{
        padding:13,
      
    },
    Logintext:{
     fontWeight:"500",
     color:"#47A0E9",
    }
});

export default Signuppage;
