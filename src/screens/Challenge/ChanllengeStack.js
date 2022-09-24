import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ChallengeScreen from './ChallengeScreen';
import ChallengeDetail from './ChallengeDetail';
import MyChallengeStory from './MyChallengeStory';
import FirstChallenge from './FirstChallenge';
import SecondChallenge from './SecondChallenge';
import ThirdChallenge from './ThirdChallenge';
import FourChallenge from './FourChallenge';
import FiveChallenge from './FiveChallenge';
import LastChallenge from './LastChallenge';
import MyStory from './MyStory';

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
      <Stack.Screen
        component={MyChallengeStory}
        name="MyChallengeStory"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={FirstChallenge}
        name="FirstChallenge"
        options={{
          title: '모집하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        component={SecondChallenge}
        name="SecondChallenge"
        options={{
          title: '모집하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        component={ThirdChallenge}
        name="ThirdChallenge"
        options={{
          title: '모집하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        component={FourChallenge}
        name="FourChallenge"
        options={{
          title: '모집하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        component={FiveChallenge}
        name="FiveChallenge"
        options={{
          title: '모집하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        component={LastChallenge}
        name="LastChallenge"
        options={{
          title: '모집하기',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        component={MyStory}
        name="MyStory"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChallengeStack;
