import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import ContractWriteScreen from './contract/ContractWriteScreen';
import SalesWriteScreen from './sales/SalesWriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContractWrite"
        component={ContractWriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SalesWrite"
        component={SalesWriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;