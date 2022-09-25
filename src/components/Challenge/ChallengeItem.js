import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ChallengeItem = ({onPress, item}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.contentWrap}>
          <Image
            style={styles.img}
            source={{uri:item.imageUrl}}
          />
          <View style={styles.content}>
            <View style={{position: 'relative'}}>
              <Text>{item.challengeName}</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/imgs/rightArrow.png')}
              />
            </View>
            <View style={styles.people}>
              <Text>{item.currCounts}명/{item.counts}명</Text>
            </View>
          </View>
        </View>
        <View style={styles.deadlineWrap}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>
            마감시간 {(item.endTime).substr(11,8)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 34,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7c7c7c',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
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
    borderRadius: 12,
  },
  content: {
    flex: 1,
    marginLeft: 22,
    justifyContent: 'center',
  },
  people: {
    marginTop: 10,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#7c7c7c',
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#979797',
    borderWidth: 1,
    width: 82,
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
