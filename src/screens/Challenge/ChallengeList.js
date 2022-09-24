import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
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
              {backgroundColor: step === 1 ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>1단계</Text>
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
              {backgroundColor: step === 2 ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>2단계</Text>
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
              {backgroundColor: step === 3 ? 'gray' : 'lightgray'},
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>3단계</Text>
          </View>
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.recruitChallenge} activeOpacity={0.7}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>챌린지 모집하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepWrap: {
    flexDirection: 'row',
    paddingHorizontal: 34,
  },
  step: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,

    height: 27,
  },
  listWrap: {
    marginTop: 20,
    height: 450,
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

export default ChallengeList;
