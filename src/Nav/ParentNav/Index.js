
import React, { useState, useEffect, Fragment } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../AuthNav/Index'
import TabNav from '../AppNav/Index'
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();

function index() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Fragment>
          {!user ? <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} /> : <Fragment>
            <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
          </Fragment>}
        </Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;

