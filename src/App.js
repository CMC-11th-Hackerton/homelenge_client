import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './screens/LoginStack';

const App = () => {
  // const state=1
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export default App;
