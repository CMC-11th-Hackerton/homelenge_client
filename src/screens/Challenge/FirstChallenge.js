import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function AddPost() {
  const [selected, setSelected] = useState(0);

  const navigation = useNavigation();

  const handleClick = () => {
    console.log(selected);
  };

  const handleClickStep1 = e => {
    setSelected(1);
  };

  const handleClickStep2 = e => {
    setSelected(2);
  };

  const handleClickStep3 = e => {
    setSelected(3);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.back_btn}>
        <Image source={require('../assets/back.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.header_title}>모집하기</Text>
      </View> */}
      <ScrollView style={styles.main_container}>
        <Text style={styles.text1}>단계를 선택해주세요</Text>
        <TouchableOpacity
          style={[
            styles.step_container,
            selected == 1
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep1()}
        >
          <Text
            style={[
              styles.step_title,
              selected == 1 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            1단계
          </Text>
          <Text
            style={[
              styles.step_info,
              selected == 1 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            작은 일부터 시작할래요
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.step_container,
            selected == 2
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep2()}
        >
          <Text
            style={[
              styles.step_title,
              selected == 2 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            2단계
          </Text>
          <Text
            style={[
              styles.step_info,
              selected == 2 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            귀찮지만 도전하고싶어요
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.step_container,
            selected == 3
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep3()}
        >
          <Text
            style={[
              styles.step_title,
              selected == 3 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            3단계
          </Text>
          <Text
            style={[
              styles.step_info,
              selected == 3 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            전 당장이라도 고치고 싶어요
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.next_btn,
          selected > 0
            ? { backgroundColor: '#0066ff' }
            : { backgroundColor: '#efefef' },
        ]}
        onPress={() => {navigation.navigate('SecondChallenge')}}
      >
        <Text
          style={[
            styles.next_btn_text,
            selected > 0 ? { color: '#ffffff' } : { color: '#000000' },
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

  step_container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    color: '#000000',
    borderRadius: 20,
    paddingVertical: 20,
    marginTop: 14,
  },

  step_title: {
    fontSize: 20,
    color: '#464646',
  },

  step_info: {
    fontSize: 15,
    color: '#464646',
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