import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageCropPicker from 'react-native-image-crop-picker';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UploadStory = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState('');

  const chooseImageFromLibrary = () => {
    if (image === '') {
      ImageCropPicker.openPicker({
        width: screenWidth,
        height: screenHeight,
        cropping: true,
        waitAnimationEnd: false,
        includeExif: true,
        forceJpg: true, //ios live photo를 jpg로 바꿔줌
        compressImageQuality: 1, //이미지 압축 0~1
        mediaType: 'photo',
        includeBase64: true,
      })
        .then(response => {
          console.log('Response: ', response);
          setImage(response);
        })
        .catch(e => console.log('Error: ', e.message));
    } else {
      Alert.alert('이미 사진이 존재합니다.');
    }
  };

  //   const uploadImage=()=>{
  //     const formData = new FormData();
  //     formData.append('images', {
  //       name: 'name',
  //       type: 'image/jpeg',
  //       uri: image.path,
  //     });
  //     fetch('http://3.38.85.251:8080/api/upload', {
  //         method: 'POST',
  //         headers: {
  //           // 'Content-Type': 'multipart/form-data',
  //           token: userInfo.token,
  //         },
  //         body: formData,
  //       })
  //         .then(response => response.json())
  //         .then(json => {
  //           console.log('upload api : ', json);
  //           console.log(json.data);
  //           if (json.success === true) {
  //             setChangedImage(json.data);
  //           }
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         });
  //   }

  useEffect(() => {
    chooseImageFromLibrary();
  }, []);

  return (
    <SafeAreaView>
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: image.path}}
          style={{width: screenWidth, height: screenHeight}}
        />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              setImage('');
              navigation.pop();
            }}>
            <Image source={require('../../assets/imgs/leftArrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: '600'}}>등록</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 34,
    width: screenWidth - 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
  },
});
export default UploadStory;
