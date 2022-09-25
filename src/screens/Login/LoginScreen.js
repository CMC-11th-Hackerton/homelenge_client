import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const LoginScreen = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>이메일 로그인</Text>
      <Text style={styles.inputText}>이메일</Text>
      <TextInput
        style={styles.textInput}
        value={id}
        onChangeText={text => setId(text)}
        placeholder="example@haruwoundong.kr"
      />
      <Text style={styles.inputText}>비밀번호</Text>
      <TextInput
          style={styles.textInput} 
          value={pw}
          onChangeText={text => setPw(text)}
          secureTextEntry={true}
          placeholder="********" />
      <View style={styles.block}>
        <View style={styles.box} />
        <Text>자동 로그인</Text>
        <View style={styles.inner}>
          <Text style={styles.findID}>아이디 찾기</Text>
          <Text style={styles.findPW}>비밀번호 찾기</Text>
        </View>
      </View>
      <TouchableOpacity

        style={[
          {
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            borderRadius: 18,
            marginHorizontal: 30,
          },
          id != '' && pw!=''
            ? { backgroundColor: '#0066ff' }
            : { backgroundColor: '#efefef' },
        ]}>
        <Text
        style={[
          styles.loginBtn,
          id != '' && pw!=''? { color: '#ffffff' } : { color: '#000000' },
        ]}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.sign}>
        <Text style={styles.guide}>아직 집린지 회원이 아니세요?</Text>
        <Text
          style={styles.signupText}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          회원가입
        </Text>
      </View>
      {/* <Button
                title="siu"
                onPress={() => {
                navigation.navigate('Signup');
                }}
            /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerText: {
    paddingHorizontal: 30,
    paddingTop: 100,
    paddingBottom: 60,
    fontSize: 20,
    color: '#464646',
  },
  inputText: {
    paddingHorizontal: 30,
    marginLeft: 15,
    color: '#464646',
  },
  textInput: {
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    fontSize: 17,
    height: 56,
    borderRadius: 18,
    color: '#BDBFC1',
    backgroundColor: '#FFFFFF',
    borderColor: '#7B7F83',
    borderWidth: 1,
  },
  block: {
    flexDirection: 'row',
    paddingHorizontal: 45,
    paddingBottom: 20,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  findID: {
    marginRight: 10,
    textDecorationLine: 'underline',
  },
  findPW: {
    textDecorationLine: 'underline',
  },
  sign: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    marginLeft: 10,
    textDecorationLine: 'underline',
    color: '#121212',
  },
  box: {
    width: 16,
    height: 16,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginRight: 5,
    borderRadius: 4,
    borderColor: '#7B7F83',
  },
  guide: {
    color: '#121212',
  },
  loginBtn: {
    fontSize: 18,
    color: '#909397',
  },
});

export default LoginScreen;
