import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Story() {
  const [index, setIndex] = useState(0);
  const [stories, setStories] = useState([
    require('../../assets/imgs/sample.jpg'),
    require('../../assets/imgs/sample2.jpg'),
    require('../../assets/imgs/sample3.jpg'),
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    if (index == stories.length) console.log('hello'); // 나가기
    console.log(stories[index]);
  }, [index]);

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImg} source={stories[index]} />
      {index == 0 ? null : (
        <TouchableOpacity
          style={styles.moveLeft}
          onPress={() => {
            setIndex(index - 1);
          }}
        >
          <Image source={require('../../assets/imgs/moveLeft.png')} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.moveRight}
        onPress={() => {
          setIndex(index + 1);
        }}
      >
        <Image source={require('../../assets/imgs/moveRight.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quit}
        onPress={() => {navigation.navigate('MyChallengeStory')}}
      >
        <Image source={require('../../assets/imgs/x.png')} />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <View style={styles.profileImg}></View>
        <Text>닉네임1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
  },

  moveLeft: {
    position: 'absolute',
    left: 0,
    top: 400,
    // bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  moveRight: {
    position: 'absolute',
    top: 400,
    right: 0,
    // bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  quit: {
    position: 'absolute',
    top: 40,
    right: 25,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    left: 30,
  },

  profileImg: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginEnd: 5,
  },
});