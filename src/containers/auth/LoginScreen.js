import React from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput, Headline } from 'react-native-paper'

const LoginScreen = ({ navigation }) => {
    return (
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
                mode="outlined"
                label="Email"
            />
            <TextInput 
                mode="outlined"
                label="Password"
            />
            <Button
                style={{
                    marginTop: 20,
                    padding: 5
                }}
                mode="contained"
            >
                LOGIN
            </Button>
        </View>
    )
}

export default LoginScreen