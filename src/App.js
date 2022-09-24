import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './screens/LoginStack';
import MainTab from './screens/MainTab';

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default App;
