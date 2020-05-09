import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {    
  View,
  Text 
} from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <View>
            <Text>Ok Something changes</Text>
        </View>
    )    
}

export default Navigation;
 