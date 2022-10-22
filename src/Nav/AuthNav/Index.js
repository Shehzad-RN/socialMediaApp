// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/Authscreens/Login/Loginscreen'
import Signup from '../../Screens/Authscreens/Signup/Signupscreen'


const Stack = createNativeStackNavigator();

function Index() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
  );
}

export default Index;