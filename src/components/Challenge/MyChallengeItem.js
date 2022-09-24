import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ChallengeItem = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
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
            <View style={styles.status}>
              <Text style={{fontSize: 15}}>진행중</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 34,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#aaaaaa',
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 7,
  },
  contentWrap: {
    flexDirection: 'row',
    paddingVertical: 17,
    paddingHorizontal: 15,
  },
  img: {
    width: 107,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    marginLeft: 22,
    justifyContent: 'center',
  },
  status: {
    marginTop: 10,
    borderRadius: 13,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: 64,
  },
  arrow: {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: [{translateY: 2}],
  },
});
export default ChallengeItem;
