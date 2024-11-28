import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchScreen from '../screens/MatchScreen';
import ChatScreen from '../screens/ChatScreen';

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
