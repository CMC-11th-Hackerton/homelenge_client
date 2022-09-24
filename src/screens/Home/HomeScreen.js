import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Text,
  Button,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

const mock = [1, 2, 3, 4, 5];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView style={{paddingHorizontal: 26, paddingTop: 23}}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 18,
                backgroundColor: 'gray',
              }}
            />
            <Text style={styles.headerText}>
              <Text style={{fontWeight: 'bold'}}>줄리</Text>님 안녕하세요!
            </Text>
          </View>
          <Image source={require('../../assets/imgs/notification.png')} />
        </View>
        <View style={styles.circleWrap}>
          <View style={styles.circle} />
        </View>
        <View style={styles.challengeWrap}>
          <TouchableOpacity style={styles.challenge} activeOpacity={0.7}>
            <View style={styles.challengeContentWrap}>
              <View style={styles.challengeContent}>
                <Text style={{fontSize: 18, fontWeight: '400'}}>
                  아침에 일어나기
                </Text>
              </View>
              <View style={styles.challengeStatus}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>진행중</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.joinChallenge}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Detail');
            }}>
            <Text style={{fontSize: 20}}>챌린지 참여하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ranking}>
          <Text style={{fontSize: 26, fontWeight: 'bold', lineHeight: 32}}>
            현재 인기있는 챌린지를{'\n'}확인해보세요!
          </Text>
          <View style={{marginTop: 8}}>
            {mock.map((data, idx) => (
              <View style={{marginVertical: 8}} key={idx}>
                <View style={styles.rankingItem}>
                  <Text style={{fontSize: 18}}>1. 8시에 일어나서 이불개기</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {fontSize: 26, marginLeft: 17},
  circleWrap: {
    marginTop: 40,
    alignItems: 'center',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'gray',
  },
  challengeWrap: {
    alignItems: 'center',
    marginTop: 80,
  },
  challenge: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    backgroundColor: 'gray',
  },
  challengeContentWrap: {
    flex: 1,
    paddingHorizontal: 31,
    paddingVertical: 25,
    flexDirection: 'row',
  },
  challengeContent: {flex: 3},
  challengeStatus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinChallenge: {
    marginTop: 16,
    width: '100%',
    height: 83,
    borderRadius: 12,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ranking: {
    marginTop: 24,
    paddingHorizontal: 11,
  },
  rankingItem: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    backgroundColor: 'gray',
    padding: 18,
    justifyContent: 'center',
  },
});

export default HomeScreen;
