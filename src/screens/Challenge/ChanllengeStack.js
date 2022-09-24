import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>dd</Text>
      <Button
        title="siu"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </SafeAreaView>
  );
};

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>detail</Text>
      {/* <Button title='siu'/> */}
    </SafeAreaView>
  );
};

const ChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailScreen}
        name="Detail"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChallengeStack;
