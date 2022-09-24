import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeStack from './Home/HomeStack';
import ChallengeStack from './Challenge/ChanllengeStack';
import {theme} from '../color';
import Fd from 'react-native-vector-icons/Foundation';
import Mi from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: theme.lighten}}>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          headerShown: false,
          title: '홈',
          tabBarIcon: ({color}) => <Fd name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        component={ChallengeStack}
        name="Challenge"
        options={{
          headerShown: false,
          title: '챌린지',
          tabBarIcon: ({color}) => <Fd name="flag" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        component={ChallengeStack}
        name="Community"
        options={{
          headerShown: false,
          title: '커뮤니티',
          tabBarIcon: ({color}) => (
            <Mi name="chat-bubble-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={ChallengeStack}
        name="MyPage"
        options={{
          headerShown: false,
          title: '마이페이지',
          tabBarIcon: ({color}) => (
            <Mi name="perm-identity" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
