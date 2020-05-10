import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput, Headline, Snackbar } from 'react-native-paper'
import axios from 'axios';
import base64 from 'react-native-base64';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    
    const check = () => {
        axios.post('http://localhost:8000/api/auth/login', {
            email: 'admin@email.com',
            password: 'passwor'
        }).then((response) => {
            console.log(response)
        });
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
                    onChangeText={text => setEmail(text)}
                    />
                <TextInput 
                    style={{ backgroundColor: 'transparent' }}
                    label="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    />
                <Button
                    style={{
                        marginTop: 20,
                        padding: 5
                    }}
                    mode="contained"
                    onPress={() => {
                        axios.post('http://192.168.100.57:8000/api/auth/login', {
                            email: email.text,
                            password: password.text,
                        }).then((response) => {
                            console.log(response.data);
                            navigation.navigate('Home');
                        }).catch((error) => {
                            setVisible(true);
                        })
                    }}
                    >
                    LOGIN
                </Button>        
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between' }} >
                <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                action={{
                    label: 'Undo',
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