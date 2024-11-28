import React from 'react'; 
import {NavigationContainer} from "@react-navigation/native";   //Navigation container for the app
import {createStackNavigator} from '@react-navigation/stack';   //Stack navigator for screen transitions
import HomeScreen from './src/screens/HomeScreen';  //import HomeScreen component
import ProfileScreen from './src/screens/ProfileScreen';  //import ProfileScreen component
import MatchScreen from './src/screens/MatchScreen';
import ChatScreen from './src/screens/ChatScreen'; 
import Login from './src/screens/AuthScreen'; 
import{SafeAreaProvider} from 'react-native-safe-area-context'; 
import { RootStackParamList } from './src/types/navigation'; // Import navigation types


const Stack = createStackNavigator<RootStackParamList>(); 

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
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
              name="Match"
              component={MatchScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App; 