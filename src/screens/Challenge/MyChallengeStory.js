import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const MyChallengeStory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.back_btn}
        onPress={() => {
          navigation.pop();
        }}>
        <Image source={require('../../assets/imgs/back.png')} />
      </TouchableOpacity>
      <View style={styles.block}>
        <View style={styles.box} />
        <View>
          <Text style={styles.title}>8시에 일어나서 이불개기</Text>
          <View style={styles.wrap}>
            <View style={styles.peopleWrap}>
              <Text>5명/13명</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.deadline}>
        <Text>종료시간까지 02:00:25</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.storyTitle}>챌린저 인증 스토리</Text>
      <View style={{height: 64}}>
        <ScrollView horizontal={true}>
          <View style={styles.storyWrap}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('MyStory')}}>
                <View style={styles.story} />
            </TouchableOpacity>
            <View style={styles.story} />
            <View style={styles.story} />
            <View style={styles.story} />
            <View style={styles.story} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.recruitChallenge} activeOpacity={0.7}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>지목하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.recruitChallenge} activeOpacity={0.7}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            나의 챌린지 인증하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  back_btn: {
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  block: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  box: {
    width: 135,
    height: 120,
    marginRight: 15,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    // borderWidth: 1,
    width: 150,
  },
  wrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  topPeopleWrap: {
    backgroundColor: '#EBEBEB',
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  peopleWrap: {
    backgroundColor: '#EBEBEB',
    width: 81,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginRight: 10,
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
    marginVertical: 10,
  },
  deadline: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deadlineTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputWrap: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deadlineInput: {
    borderRadius: 50,
    width: 53,
    height: 53,
    backgroundColor: '#EBEBEB',
    textAlign: 'center',
  },
  time: {
    paddingHorizontal: 10,
  },
  talkBox: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 12,
    height: 217,
    backgroundColor: '#EBEBEB',
  },
  talk: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  storyWrap: {
    // borderWidth: 1,
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 30,
  },
  story: {
    marginRight: 15,
    width: 64,
    height: 64,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  startBtn: {
    fontSize: 18,
    color: '#909397',
  },
  storyTitle: {
    marginVertical: 10,
    paddingHorizontal: 30,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonWrap: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  recruitChallenge: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    backgroundColor: 'lightgray',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
});

export default MyChallengeStory;
