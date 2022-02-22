import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';

const Stack = createStackNavigator();

function AuthNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        options={{
          headerShown: false,
        }}
        component={Screens.LoginScreen}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          headerShown: false,
        }}
        component={Screens.RegisterScreen}
      />
    </Stack.Navigator>
  );
}

export default App;
