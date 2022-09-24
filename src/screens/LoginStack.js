import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>dd</Text>
      <Button
        title="siu"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </SafeAreaView>
  );
};

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>signup</Text>
      {/* <Button title='siu'/> */}
    </SafeAreaView>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={SignupScreen} name="Signup" />
    </Stack.Navigator>
  );
};

export default LoginStack;
