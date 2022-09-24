import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeStack from './Home/HomeStack';
import ChallengeStack from './Challenge/ChanllengeStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{headerShown: false, title: '홈'}}
      />
      <Tab.Screen
        component={ChallengeStack}
        name="Challenge"
        options={{headerShown: false, title: '챌린지'}}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
