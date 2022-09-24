import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './screens/LoginStack';
import MainTab from './screens/MainTab';

const App = () => {
  const [status, setStatus] = useState(2);
  return (
    <NavigationContainer>
      {status === 1 ? <LoginStack /> : <MainTab />}
    </NavigationContainer>
  );
};

export default App;
