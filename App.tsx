import React from 'react'; 
import {NavigationContainer} from "@react-navigation/native";   //Navigation container for the app
import {createStackNavigator} from '@react-navigation/stack';   //Stack navigator for screen transitions
import HomeScreen from './src/screens/HomeScreen';  //import HomeScreen component
import ProfileScreen from './src/screens/ProfileScreen';  //import ProfileScreen component
import ChatScreen from './src/screens/ChatScreen';
import{SafeAreaProvider} from 'react-native-safe-area-context'; 

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}} //hides header for the home screen
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App; 