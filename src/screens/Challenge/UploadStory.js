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
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UploadStory = ({route}) => {
  const navigation = useNavigation();
  const id = route.params.id;
  const [image, setImage] = useState();

  const chooseImageFromLibrary = () => {
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
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('imageFiles', {
      name: 'imageFiles',
      type: 'image/jpeg',
      uri: image.path,
    });
    formData.append('challengeId', id);
    formData.append('id', 1);

    axios
      .post('https://treaily.shop:443/story', formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.error(e);
      });
  };

  useEffect(() => {
    chooseImageFromLibrary();
  }, []);

  return (
    <SafeAreaView>
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: image?.path}}
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
          <TouchableOpacity onPress={uploadImage}>
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
