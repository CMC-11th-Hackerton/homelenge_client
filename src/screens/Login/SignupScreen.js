import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

export default function SignupScreen() {
  const navigation = useNavigation();
  const emailRef = useRef(null);
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordRef2 = useRef(null);

  const handleClick = () => {
    console.log(emailRef);
    console.log(nicknameRef);
    console.log(passwordRef);
    console.log(passwordRef2);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.back_btn}
          onPress={() => {
            navigation.pop();
          }}>
          <Image source={require('../../assets/imgs/back.png')} />
        </TouchableOpacity>
        <View style={styles.info_container}>
          <Text style={styles.signup_title}>회원가입</Text>
          <Text style={styles.signup_info}>
            계정 정보를 입력하고 비밀번호를 설정해주세요.
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.input_container}>
          <Text style={styles.input_label}>이메일</Text>
          <TextInput
            style={styles.input}
            ref={emailRef}
            placeholder="example@naver.com"></TextInput>
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>닉네임</Text>
          <TextInput
            style={styles.input}
            ref={nicknameRef}
            placeholder="하루운동"></TextInput>
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>비밀번호</Text>
          <TextInput
            style={styles.input}
            ref={passwordRef}
            secureTextEntry={true}
            placeholder="*******"></TextInput>
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_label}>비밀번호 확인</Text>
          <TextInput
            style={styles.input}
            ref={passwordRef2}
            secureTextEntry={true}
            placeholder="*******"></TextInput>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.next_btn} onPress={() => handleClick()}>
        <Text style={styles.next_btn_text}>다음</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },

  back_btn: {
    marginTop: 15,
  },

  info_container: {
    marginVertical: 20,
    marginBottom: 40,
  },

  signup_title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  input_container: {
    marginBottom: 20,
  },

  input_label: {
    marginBottom: 5,
  },

  input: {
    borderWidth: 0.5,
    borderRadius: 20,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  next_btn: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    marginTop: 50,
  },

  next_btn_text: {
    color: '#909397',
    fontSize: 15,
  },
});
