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

export default function AddPost5() {
  const [content, setContent] = useState('');

  const navigation = useNavigation();

  const handleClick = () => {
    console.log(content);
  };

  const save = async () => {
    try{
      await AsyncStorage.setItem('content', content);
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
        <Text style={styles.text1}>방장님의 한 마디를 적어주세요</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          textAlignVertical={'top'}
          value={content}
          onChangeText={text => setContent(text)}
        ></TextInput>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.next_btn,
          content != ''
            ? { backgroundColor: '#0066ff' }
            : { backgroundColor: '#efefef' },
        ]}
        onPress={() => {
          navigation.navigate('LastChallenge')
          save()
        }}
      >
        <Text
          style={[
            styles.next_btn_text,
            content != '' ? { color: '#ffffff' } : { color: '#000000' },
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
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    fontSize: 20,
    height: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 35,
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