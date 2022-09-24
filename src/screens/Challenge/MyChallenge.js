import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import MyChallengeItem from '../../components/Challenge/MyChallengeItem';
import {theme} from '../../color';
import axios from 'axios';

const MyChallenge = () => {
  const [filter, setFilter] = useState('all');
  const [curChalls, setCurChalls] = useState([]);
  const [madeChalls, setMadeChalls] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const url =
      filter === 'all'
        ? 'myChall'
        : filter === 'ongoing'
        ? 'myCurrChall'
        : 'myEndChall';

    axios
      .get(`https://treaily.shop:443/challenge/${url}?id=1`)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setCurChalls(res.data.currChalls);
          setMadeChalls(res.data.madeChalls);
        }
      })
      .catch(e => {
        console.error(e);
      });
  }, [filter]);

  return (
    <View style={{marginTop: 20}}>
      <View style={styles.filterWrap}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setFilter('all');
          }}>
          <View
            style={[
              styles.filter,
              {
                backgroundColor: filter === 'all' ? theme.lighten : 'white',
                borderColor: filter === 'all' ? theme.lighten : '#7c7c7c',
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: filter === 'all' ? 'white' : '#7c7c7c',
              }}>
              전체
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setFilter('ongoing');
          }}>
          <View
            style={[
              styles.filter,
              {
                backgroundColor: filter === 'ongoing' ? theme.lighten : 'white',
                borderColor: filter === 'ongoing' ? theme.lighten : '#7c7c7c',
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: filter === 'ongoing' ? 'white' : '#7c7c7c',
              }}>
              진행중
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setFilter('end');
          }}>
          <View
            style={[
              styles.filter,
              {
                backgroundColor: filter === 'end' ? theme.lighten : 'white',
                borderColor: filter === 'end' ? theme.lighten : '#7c7c7c',
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: filter === 'end' ? 'white' : '#7c7c7c',
              }}>
              종료된 챌린지
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.filterBtn}>
          <Image source={require('../../assets/imgs/filter.png')} />
        </View>
      </View>
      <View style={{marginBottom: 40}}>
        <View style={styles.recruitWrap}>
          <Text
            style={{
              marginLeft: 34,
              fontSize: 18,
              fontWeight: '600',
              paddingVertical: 12,
            }}>
            모집한 챌린지
          </Text>
          <FlatList
            data={madeChalls}
            renderItem={({item}) => (
              <MyChallengeItem
                id={item.id}
                url={item.imageUrl}
                missionName={item.missionName}
                finished={item.finished}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={[styles.recruitWrap, {marginTop: 10}]}>
          <Text
            style={{
              marginLeft: 34,
              fontSize: 18,
              fontWeight: '600',
              paddingVertical: 12,
            }}>
            참여중인 챌린지
          </Text>
          <FlatList
            data={curChalls}
            renderItem={({item}) => (
              <MyChallengeItem
                id={item.id}
                url={item.imageUrl}
                missionName={item.missionName}
                finished={item.finished}
                onPress={() => {
                  navigation.navigate('MyChallengeStory');
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterWrap: {
    flexDirection: 'row',
    marginHorizontal: 34,
    paddingBottom: 15,
  },
  filter: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    borderWidth: 1,
    height: 27,
  },
  filterBtn: {
    width: 48,
    height: 27,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#7c7c7c',
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  recruitWrap: {
    height: 260,
  },
  buttonWrap: {
    paddingHorizontal: 34,
    marginTop: 20,
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
export default MyChallenge;
