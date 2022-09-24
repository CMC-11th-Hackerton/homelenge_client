import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ChallengeItem = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.contentWrap}>
          <Image
            style={styles.img}
            source={require('../../assets/imgs/notification.png')}
          />
          <View style={styles.content}>
            <View style={{position: 'relative'}}>
              <Text>8시에 일어나서 이불개기</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/imgs/rightArrow.png')}
              />
            </View>
            <View style={styles.people}>
              <Text>13명/5명</Text>
            </View>
          </View>
        </View>
        <View style={styles.deadlineWrap}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>
            마감시간 02:00:25
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 34,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  wrap: {},
  contentWrap: {
    flexDirection: 'row',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 17,
    paddingHorizontal: 15,
  },
  img: {
    width: 107,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
  },
  content: {
    flex: 1,
    marginLeft: 22,
    justifyContent: 'center',
  },
  people: {
    marginTop: 10,
    borderRadius: 13,
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: 80,
  },
  arrow: {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: [{translateY: 2}],
  },
  deadlineWrap: {
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ChallengeItem;
