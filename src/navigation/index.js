import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {    
  View,
  Text 
} from 'react-native';
import LoginScreen from '../containers/auth/LoginScreen';
import HomeScreen from '../containers/HomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{
                        title: "Login",
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )    
}

export default Navigation;
 