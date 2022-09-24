import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ChallengeScreen from './ChallengeScreen';
import ChallengeDetail from './ChallengeDetail';

const Stack = createNativeStackNavigator();

const ChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ChallengeScreen}
        name="Challenge"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChallengeDetail}
        name="ChallengeDetail"
        options={{
          title: '신청하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ChallengeStack;
