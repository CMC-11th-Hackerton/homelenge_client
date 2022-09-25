import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function AddPost3() {
  const [number, setNumber] = useState('');

  const navigation = useNavigation();

  const handleClick = () => {
    console.log(number);
  };

  const save = async () => {
    try{
      await AsyncStorage.setItem('counts', number.toString());
    } catch (e) {

    }
  }

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.back_btn}>
        <Image source={require('../assets/back.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.header_title}>모집하기</Text>
      </View> */}
      <ScrollView style={styles.main_container}>
        <Text style={styles.text1}>인원 수를 선택해주세요</Text>
        <View style={styles.number_of_people}>
          <TextInput
            style={styles.number_input}
            textAlign={'center'}
            value={number}
            keyboardType={'number-pad'}
            onChangeText={num => setNumber(num)}
          ></TextInput>
          <Text>명</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.next_btn,
          number != ''
            ? { backgroundColor: '#0066ff' }
            : { backgroundColor: '#efefef' },
        ]}
        onPress={() => {
          navigation.navigate('FourChallenge')
          save()
        }}
      >
        <Text
          style={[
            styles.next_btn_text,
            number != '' ? { color: '#ffffff' } : { color: '#000000' },
          ]}
        >
          다음
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  back_btn: {
    position: 'absolute',
    top: 50,
    left: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#DDDDDD',
    marginTop: 30,
    paddingVertical: 20,
  },

  header_title: {
    fontSize: 15,
  },

  main_container: {
    padding: 30,
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  number_of_people: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  number_input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    fontSize: 15,
    width: 30,
    height: 30,
    borderRadius: 10,
    marginEnd: 5,
  },

  next_btn: {
    backgroundColor: '#efefef',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    margin: 30,
  },

  next_btn_text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});