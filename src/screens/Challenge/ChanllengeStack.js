import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ChallengeScreen from './ChallengeScreen';

const Stack = createNativeStackNavigator();

const ChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ChallengeScreen}
        name="Challenge"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChallengeStack;
