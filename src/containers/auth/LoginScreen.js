import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput, Headline, Snackbar, HelperText } from 'react-native-paper'
import axios from 'axios';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    
    const login = () => {
        axios.post('http://192.168.100.57:8000/api/auth/login', {
            email: email,
            password: password,
        }).then((response) => {
            navigation.navigate('Home');
        }).catch((error) => {
            console.log(email);
            console.log(password);
            setVisible(true);
        })
    }

    return (
        <>
            <View 
                style={{ 
                    flex: 1,
                    padding: 20,
                    justifyContent: 'center'
                }} 
                >
                <View style={{ alignItems: 'center' }} >
                    <Headline>Login Page</Headline>
                </View>
                <TextInput 
                    style={{ backgroundColor: 'transparent' }}
                    label="Email"
                    error={true}
                    errorText='Error nih emailnya'
                    onChangeText={text => setEmail(text)}                    
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <HelperText
                type="error"
                visible={true}
                >
                Email address is invalid!
                </HelperText>
                <TextInput 
                    style={{ backgroundColor: 'transparent' }}
                    label="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    error={true}
                    errorText='Error nih emailnya'
                />                
                <Button
                    style={{
                        marginTop: 20,
                        padding: 5
                    }}
                    mode="contained"
                    onPress={() => login()}
                >
                    LOGIN
                </Button>        
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between' }} >
                <Snackbar
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    action={{
                        label: 'Dismiss',
                        onPress: () => {
                            // Do something
                        },
                    }}
                >
                Password dan Username Salah, Coba lagi 
                </Snackbar>            
            </View>
        </>
    )
}

export default LoginScreen 