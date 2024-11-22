import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MatchScreen from '../screens/MatchScreen';
import ChatScreen from '../screens/ChatScreen';
import { Colors } from '../styling/colors';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MatchScreen">
      <Stack.Screen 
        name="Match" 
        component={MatchScreen} 
    />
      <Stack.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{headerShown: false}}
    />
    </Stack.Navigator>
  );
};

export default StackNavigator;
