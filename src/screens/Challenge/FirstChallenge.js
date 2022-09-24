import React, { useState } from 'react';
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
              ? { backgroundColor: '#d8d8d8' }
              : { backgroundColor: 'white' },
          ]}
          onPress={() => handleClickStep1()}
        >
          <Text style={styles.step_title}>1단계</Text>
          <Text style={styles.step_info}>작은 일부터 시작할래요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.step_container,
            selected == 2
              ? { backgroundColor: '#d8d8d8' }
              : { backgroundColor: 'white' },
          ]}
          onPress={() => handleClickStep2()}
        >
          <Text style={styles.step_title}>2단계</Text>
          <Text style={styles.step_info}>귀찮지만 도전하고싶어요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.step_container,
            selected == 3
              ? { backgroundColor: '#d8d8d8' }
              : { backgroundColor: 'white' },
          ]}
          onPress={() => handleClickStep3()}
        >
          <Text style={styles.step_title}>3단계</Text>
          <Text style={styles.step_info}>전 당장이라도 고치고 싶어요</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.next_btn} onPress={() => handleClick()}>
        <Text style={styles.next_btn_text}>다음</Text>
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