import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import ChallengeList from './ChallengeList';
import MyChallenge from './MyChallenge';
import {theme} from '../../color';

const ChallengeScreen = () => {
  const [view, setView] = useState('list');

  return (
    <SafeAreaView style={{paddingTop: 20, backgroundColor: 'white', flex: 1}}>
      <View style={styles.topTabWrap}>
        <TouchableOpacity
          style={[
            styles.topTab,
            {
              borderBottomWidth: view === 'list' ? 3 : 1,
              borderBottomColor: view === 'list' ? theme.lighten : '#bbbbbb',
            },
          ]}
          onPress={() => {
            setView('list');
          }}
          activeOpacity={1}>
          <View>
            <Text
              style={[
                styles.topTabText,
                {color: view === 'list' ? theme.lighten : '#bbbbbb'},
              ]}>
              챌린지 리스트
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topTab,
            {
              borderBottomWidth: view === 'my' ? 3 : 1,
              borderBottomColor: view === 'my' ? theme.lighten : '#bbbbbb',
            },
          ]}
          onPress={() => {
            setView('my');
          }}
          activeOpacity={1}>
          <View>
            <Text
              style={[
                styles.topTabText,
                {color: view === 'my' ? theme.lighten : '#bbbbbb'},
              ]}>
              나의 챌린지
            </Text>
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
  },
  topTab: {paddingVertical: 8, flex: 1, alignItems: 'center'},
  topTabText: {fontSize: 16, fontWeight: '500'},
});

export default ChallengeScreen;
