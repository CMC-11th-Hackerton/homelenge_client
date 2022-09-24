import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import ChallengeList from './ChallengeList';
import MyChallenge from './MyChallenge';

const ChallengeScreen = () => {
  const [view, setView] = useState('list');

  return (
    <SafeAreaView style={{paddingTop: 40}}>
      <View style={styles.topTabWrap}>
        <TouchableOpacity
          style={[
            styles.topTab,
            {
              borderBottomWidth: view === 'list' ? 3 : 0,
              borderBottomColor: view === 'list' ? 'black' : '',
            },
          ]}
          onPress={() => {
            setView('list');
          }}
          activeOpacity={1}>
          <View>
            <Text style={styles.topTabText}>챌린지 리스트</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topTab,
            {
              marginLeft: 28,
              borderBottomWidth: view === 'my' ? 3 : 0,
              borderBottomColor: view === 'my' ? 'black' : '',
            },
          ]}
          onPress={() => {
            setView('my');
          }}
          activeOpacity={1}>
          <View>
            <Text style={styles.topTabText}>나의 챌린지</Text>
          </View>
        </TouchableOpacity>
      </View>
      {view === 'list' ? <ChallengeList /> : <MyChallenge />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topTabWrap: {
    flexDirection: 'row',
    paddingHorizontal: 34,
    // width:
  },
  topTab: {paddingVertical: 8},
  topTabText: {fontSize: 16, fontWeight: '500'},
});

export default ChallengeScreen;
