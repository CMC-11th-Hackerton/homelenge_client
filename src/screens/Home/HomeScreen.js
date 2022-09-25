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
  Dimensions,
} from 'react-native';
import {theme} from '../../color';
import MI from 'react-native-vector-icons/MaterialIcons';

const mock = [1, 2, 3, 4, 5];
const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          paddingHorizontal: 26,
          paddingTop: 23,
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View style={styles.logoWrap}>
          <Image source={require('../../assets/imgs/logo.png')} />
        </View>
        <View style={styles.header}>
          <View style={styles.profileWrap}>
            <View style={styles.profile}>
              <Image source={require('../../assets/imgs/profile.png')} />
            </View>
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
          <Image source={require('../../assets/imgs/cute.png')} />
        </View>
        <View style={styles.challengeWrap}>
          <TouchableOpacity style={styles.challenge} activeOpacity={0.7}>
            <View style={styles.challengeContentWrap}>
              <View style={styles.challengeContent}>
                <Text style={{fontSize: 18, fontWeight: '400'}}>
                  아침에 일어나기
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    alignItems: 'center',
                  }}>
                  <View style={styles.profile}>
                    <Image source={require('../../assets/imgs/profile.png')} />
                  </View>
                  <View style={[styles.profile, {marginLeft: -12}]}>
                    <Image source={require('../../assets/imgs/profile.png')} />
                  </View>
                  <Text
                    style={{fontSize: 18, fontWeight: '500', marginLeft: 8}}>
                    +4
                  </Text>
                </View>
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
                <MI name="arrow-forward-ios" size={18} color={theme.lighten} />
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
                  <Text style={{fontSize: 18}}>
                    {data}. 8시에 일어나서 이불개기
                  </Text>
                  <Image source={require('../../assets/imgs/upArrow.png')} />
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
  logoWrap: {
    marginLeft: -26,
    width: screenWidth,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileWrap: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 60,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 18,
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
