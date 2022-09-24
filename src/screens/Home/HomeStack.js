import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import ChallengeScreen from '../Challenge/ChallengeScreen';

const Stack = createNativeStackNavigator();

const DetailScreen = () => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>detail</Text>
      {/* <Button title='siu'/> */}
    </SafeAreaView>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChallengeScreen}
        name="Challenge"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
