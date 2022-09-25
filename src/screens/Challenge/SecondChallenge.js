import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function AddPost2() {
  const [selected, setSelected] = useState(0);

  const navigation = useNavigation();

  const handleClick = () => {
    console.log(selected);
  };

  const handleClickStep1 = e => {
    setSelected(1);
  };

  const handleClickStep2 = e => {
    setSelected(2);
  };

  const handleClickStep3 = e => {
    setSelected(3);
  };

  const handleClickStep4 = e => {
    setSelected(4);
  };

  const handleClickStep5 = e => {
    setSelected(5);
  };

  const handleClickStep6 = e => {
    setSelected(6);
  };

  const handleClickStep7 = e => {
    setSelected(7);
  };

  const handleClickStep8 = e => {
    setSelected(8);
  };

  const handleClickStep9 = e => {
    setSelected(9);
  };

  const handleClickStep10 = e => {
    setSelected(10);
  };

  const save = async () => {
    try{
      await AsyncStorage.setItem('missionId', selected.toString());
    } catch (e) {

    }
  }

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.back_btn}>
        <Image source={require('../assets/back.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.header_title}>모집하기</Text>
      </View> */}
      <Text style={styles.text1}>챌린지를 선택해주세요</Text>
      <ScrollView style={styles.main_container}>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 1
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep1()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/%EB%B9%A8%EB%9E%98.png"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 1 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            8시에 일어나서 이불개기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 2
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep2()}
        >
          <Image style={styles.challange_image} source={{uri: "https://health.chosun.com/site/data/img_dir/2020/11/30/2020113002033_0.jpg"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 2 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            아침 식사하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 3
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep3()}
        >
          <Image style={styles.challange_image} source={{uri: "https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2015/01/01/c_km601/476673_540.jpg"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 3 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            씻고 산책하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 4
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep4()}
        >
          <Image style={styles.challange_image} source={{uri: "https://img.vogue.co.kr/vogue/2019/01/style_5c381f5c5dc34-930x621.jpg"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 4 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            사람 만나기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 5
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep5()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/HKPU_04_04_pic1.jpg"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 5 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            카페에서 공부하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 6
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep6()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C+(1).jfif"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 6 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            방청소하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 7
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep7()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/99DC01475B51308931.jfif"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 7 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            명상하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 8
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep8()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/%EB%B9%A8%EB%9E%98.png"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 8 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            8시에 일어나서 이불개기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 9
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep9()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/%EB%B9%A8%EB%9E%98.png"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 9 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            8시에 일어나서 이불개기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.challange_container,
            selected == 10
              ? { borderColor: '#0066ff' }
              : { borderColor: '#DDDDDD' },
          ]}
          onPress={() => handleClickStep10()}
        >
          <Image style={styles.challange_image} source={{uri: "https://moaimage-bucket.s3.ap-northeast-2.amazonaws.com/post/%EB%B9%A8%EB%9E%98.png"}}/>
          <Text
            style={[
              styles.challange_title,
              selected == 10 ? { color: '#0066ff' } : { color: '#464646' },
            ]}
          >
            8시에 일어나서 이불개기
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.next_btn,
          selected > 0
            ? { backgroundColor: '#0066ff' }
            : { backgroundColor: '#efefef' },
        ]}
        onPress={() => {
          navigation.navigate('ThirdChallenge')
          save()
        }}
      >
        <Text
          style={[
            styles.next_btn_text,
            selected > 0 ? { color: '#ffffff' } : { color: '#000000' },
          ]}
        >
          다음
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  back_btn: {
    position: 'absolute',
    top: 50,
    left: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#DDDDDD',
    marginTop: 30,
    paddingVertical: 20,
  },

  header_title: {
    fontSize: 15,
  },

  main_container: {
    paddingHorizontal: 30,
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginStart: 30,
  },

  challange_container: {
    flexDirection: 'row',
    paddingHorizontal: 10,

    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 14,
  },

  challange_image: {
    width: 100,
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginStart: 20,
  },

  challange_title: {
    fontSize: 15,
    color: '#464646',
    marginStart: 20,
  },

  next_btn: {
    backgroundColor: '#efefef',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    margin: 30,
  },

  next_btn_text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});