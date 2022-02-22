import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';

const Stack = createStackNavigator();

function DashboardStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={Screens.HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default { DashboardStackNav };
