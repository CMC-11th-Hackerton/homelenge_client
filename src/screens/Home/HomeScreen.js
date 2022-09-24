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
import {theme} from '../../color';

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
          <Image
            style={{marginTop: 8}}
            source={require('../../assets/imgs/notification.png')}
          />
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
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: theme.lighten,
                  }}>
                  진행중
                </Text>
                <Image
                  style={{marginLeft: 8}}
                  source={require('../../assets/imgs/rightArrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.joinChallenge}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Challenge');
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>챌린지 참여하기</Text>
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
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinChallenge: {
    marginTop: 16,
    width: '100%',
    height: 83,
    borderRadius: 12,
    backgroundColor: theme.lighten,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ranking: {
    marginTop: 24,
    paddingHorizontal: 11,
  },
  rankingItem: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 18,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen;
