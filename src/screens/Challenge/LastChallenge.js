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
  Modal,
  Pressable,
} from 'react-native';

export default function AddPost6() {
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleClick = () => {
    setModalVisible(true);
    console.log(hour);
    console.log(min);
    console.log(sec);
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
        <Text style={styles.text1}>모집 마감 시간을 정해주세요</Text>
        <View style={styles.time}>
          <View style={styles.time_box}>
            <TextInput
              style={styles.time_input}
              textAlign={'center'}
              value={hour}
              keyboardType={'number-pad'}
              onChangeText={num => setHour(num)}
            ></TextInput>
            <Text>시</Text>
          </View>
          <View style={styles.time_box}>
            <TextInput
              style={styles.time_input}
              textAlign={'center'}
              value={min}
              keyboardType={'number-pad'}
              onChangeText={num => setMin(num)}
            ></TextInput>
            <Text>분</Text>
          </View>
          <View style={styles.time_box}>
            <TextInput
              style={styles.time_input}
              textAlign={'center'}
              value={sec}
              keyboardType={'number-pad'}
              onChangeText={num => setSec(num)}
            ></TextInput>
            <Text>초</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.next_btn,
          hour != '' && min != '' && sec != ''
            ? { backgroundColor: '#0066ff' }
            : { backgroundColor: '#efefef' },
        ]}
        onPress={() => handleClick()}
      >
        <Text
          style={[
            styles.next_btn_text,
            hour != '' && min != '' && sec != ''
              ? { color: '#ffffff' }
              : { color: '#000000' },
          ]}
        >
          다음
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>모집신청이 완료되었습니다!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={
                () => 
                {setModalVisible(!modalVisible)
                navigation.navigate('Challenge')}
            }
            >
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  time: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 35,
  },

  time_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  time_input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    fontSize: 15,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginEnd: 10,
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

  //modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 35,
    paddingHorizontal: 35,
    paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    // elevation: 2
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
});