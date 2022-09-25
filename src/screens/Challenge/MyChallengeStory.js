import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Dimensions,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {theme} from '../../color';

const MyChallengeStory = ({route}) => {
  const navigation = useNavigation();
  const id = route.params.id;
  const imgUrl = route.params.img;
  const [data, setData] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://treaily.shop:443/challenge/room?id=${id}`)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch(e => {
        console.error(e);
      });

    axios
      .get(`https://treaily.shop:443/story/detail?challengeId=${id}`)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setStories(res.data.userStoryResList);
        }
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    console.log(stories);
  }, [stories]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity
        style={styles.back_btn}
        onPress={() => {
          navigation.pop();
        }}>
        <Image source={require('../../assets/imgs/back.png')} />
      </TouchableOpacity>
      <View style={styles.missionWrap}>
        <Text>{data.missionName}</Text>
      </View>
      <View style={styles.block}>
        <Image
          source={{uri: imgUrl}}
          style={{width: 135, height: 135, borderRadius: 12}}
        />
        <View
          style={{
            marginLeft: 20,
            justifyContent: 'space-between',
            paddingVertical: 4,
          }}>
          <Text style={{color: '#979797', marginBottom: 8}}>챌린지</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.wrap}>
            <View style={styles.peopleWrap}>
              <Text style={{color: 'white'}}>
                {data.counts}명/{data.currCounts}명
              </Text>
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
            {stories.map((data, idx) => (
              <TouchableOpacity
                style={{marginRight: 20}}
                key={idx}
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('MyStory', {id: data.userId});
                }}>
                <Image
                  source={{uri: data.imageUrl}}
                  style={{width: 64, height: 64, borderRadius: 32}}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.recruitChallenge} activeOpacity={0.7}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
            지목하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.storyBtn}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('UploadStory', {id});
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: theme.lighten}}>
            나의 챌린지 인증하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  missionWrap: {
    marginLeft: 30,
    marginBottom: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
  },
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
  profile: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderColor: theme.lighten,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    alignItems: 'center',
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
    backgroundColor: theme.lighten,
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
    marginTop: 40,
    paddingHorizontal: 30,
  },
  recruitChallenge: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    backgroundColor: theme.lighten,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  storyBtn: {
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    backgroundColor: 'white',
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
