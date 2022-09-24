import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {theme} from '../../color';
import ChallengeItem from '../../components/Challenge/ChallengeItem';

const mock = [1, 2, 3, 4, 5];

const ChallengeList = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 20}}>
      <View style={styles.stepWrap}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setStep(1);
          }}>
          <View
            style={[
              styles.step,
              {
                backgroundColor: step === 1 ? theme.lighten : 'white',
                borderColor: step === 1 ? theme.lighten : '#7c7c7c',
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: step === 1 ? 'white' : '#7c7c7c',
              }}>
              1단계
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setStep(2);
          }}>
          <View
            style={[
              styles.step,
              {
                backgroundColor: step === 2 ? theme.lighten : 'white',
                borderColor: step === 2 ? theme.lighten : '#7c7c7c',
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: step === 2 ? 'white' : '#7c7c7c',
              }}>
              2단계
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setStep(3);
          }}>
          <View
            style={[
              styles.step,
              {
                backgroundColor: step === 3 ? theme.lighten : 'white',
                borderColor: step === 3 ? theme.lighten : '#7c7c7c',
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: step === 3 ? 'white' : '#7c7c7c',
              }}>
              3단계
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.filter}>
          <Image source={require('../../assets/imgs/filter.png')} />
        </View>
      </View>
      <View style={styles.listWrap}>
        <FlatList
          data={mock}
          renderItem={({item}) => (
            <ChallengeItem
              onPress={() => {
                navigation.navigate('ChallengeDetail');
              }}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={styles.recruitChallenge}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('FirstChallenge');
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
            챌린지 모집하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepWrap: {
    flexDirection: 'row',
    marginHorizontal: 34,
    position: 'relative',
  },
  step: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    borderWidth: 1,
    height: 27,
  },
  listWrap: {
    marginTop: 20,
    // height: 450,
    height: 200,
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
  filter: {
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
});

export default ChallengeList;
