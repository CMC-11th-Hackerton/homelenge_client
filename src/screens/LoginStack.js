import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from './Login/LoginScreen';
import SignupScreen from './Login/SignupScreen';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SignupScreen}
        name="Signup"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
