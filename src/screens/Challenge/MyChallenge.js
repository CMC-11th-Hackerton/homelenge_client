import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import MyChallengeItem from '../../components/Challenge/MyChallengeItem';

const mock = [1, 2, 3];
const MyChallenge = () => {
  const [filter, setFilter] = useState('all');
  const navigation = useNavigation();

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
              {backgroundColor: filter === 'all' ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>전체</Text>
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
              {backgroundColor: filter === 'ongoing' ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>진행중</Text>
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
              {backgroundColor: filter === 'end' ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>종료된 챌린지</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setFilter('bookmark');
          }}>
          <View
            style={[
              styles.filter,
              {backgroundColor: filter === 'bookmark' ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>찜</Text>
          </View>
        </TouchableOpacity>
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
            data={mock}
            renderItem={({item}) => <MyChallengeItem />}
            keyExtractor={item => item}
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
            data={mock}
            renderItem={({item}) => <MyChallengeItem onPress={() => {navigation.navigate('MyChallengeStory')}} />}
            keyExtractor={item => item}
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
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  filter: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    height: 27,
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
