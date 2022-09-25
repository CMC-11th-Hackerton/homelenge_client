import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Modal, Pressable, Alert, Image} from 'react-native';

const ChallengeDetail = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.topPeopleWrap}>
                    <Text style={{color: 'black'}}>{route.params.item.missionName}</Text>
                </View>
            </View>
            <View style={styles.block}>
                <Image
                    style={styles.img}
                    source={{uri:route.params.item.imageUrl}}
                />
                <View>
                    <Text>미션명</Text>
                    <Text style={styles.title}>{route.params.item.challengeName}</Text>
                    <View style={styles.wrap}>
                        <View style={styles.peopleWrap}>
                            <Text style={{color: 'white'}}>{route.params.item.currCounts}명/{route.params.item.counts}명</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.deadlineTitle}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: 'black'
                }}>시작 시간까지</Text>
                <Text>마감시간 변경</Text>
            </View>
            <View style={styles.inputWrap}>
                <View style={styles.timeWrap}>
                    <Text style={{
                        fontweight: 'bold',
                        fontSize: 15
                    }}>{(route.params.item.endTime).substr(11,2)}</Text>
                </View>
                <Text style={styles.time}>시간</Text>
                <View style={styles.timeWrap}>
                    <Text style={{
                        fontweight: 'bold',
                        fontSize: 15}}>{(route.params.item.endTime).substr(14,2)}</Text>
                </View>
                <Text style={styles.time}>분</Text>
                <View style={styles.timeWrap}>
                    <Text style={{
                        fontweight: 'bold',
                        fontSize: 15}}>{(route.params.item.endTime).substr(17,2)}</Text>
                </View>
                <Text style={styles.time}>초</Text>
            </View>
            <Text style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: 'black',
                    marginBottom: 10
                }}>방장님의 말</Text>
            <View style={styles.talkBox}>
                <Text style={styles.talk}>
                    {route.params.item.content}
                </Text>
            </View>
            <Text style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: 'black',
                    marginTop: 10
                }}>현재 참여한 사람</Text>
            <View style={styles.profileWrap}>
                <Image
                    style={styles.profile}
                    source={require('../../assets/imgs/sample.jpg')}
                />
                                <Image
                    style={styles.profile}
                    source={require('../../assets/imgs/sample2.jpg')}
                />
                                <Image
                    style={styles.profile}
                    source={require('../../assets/imgs/sample3.jpg')}
                />
                                <Image
                    style={styles.profile}
                    source={require('../../assets/imgs/sample.jpg')}
                />
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>신청이 완료되었습니다!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => 
                            {setModalVisible(!modalVisible)
                            navigation.navigate('Challenge')}
                        }
                    >
                    <Text style={styles.textStyle}>확인</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <TouchableOpacity 
                style={{ 
                    alignItems:'center',
                    justifyContent:'center',
                    height:56,
                    borderRadius:18,
                    backgroundColor: '#0066FF',
                }}
                onPress={() => setModalVisible(true)}
                >
                <Text style={styles.startBtn}>챌린지 신청하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
        // <View style={styles.centeredView}>
        //     <Modal
        //         animationType="slide"
        //         transparent={true}
        //         visible={modalVisible}
        //         onRequestClose={() => {
        //         Alert.alert("Modal has been closed.");
        //         setModalVisible(!modalVisible);
        //         }}
        //     >
        //         <View style={styles.centeredView}>
        //         <View style={styles.modalView}>
        //             <Text style={styles.modalText}>Hello World!</Text>
        //             <Pressable
        //             style={[styles.button, styles.buttonClose]}
        //             onPress={() => setModalVisible(!modalVisible)}
        //             >
        //             <Text style={styles.textStyle}>Hide Modal</Text>
        //             </Pressable>
        //         </View>
        //         </View>
        //     </Modal>
        //     <TouchableOpacity 
        //         style={{ 
        //             alignItems:'center',
        //             justifyContent:'center',
        //             height:56,
        //             borderRadius:18,
        //             backgroundColor: '#F0F0F0',
        //         }}
        //         onPress={() => setModalVisible(true)}
        //         >
        //         <Text style={styles.startBtn}>챌린지 신청하기</Text>
        //     </TouchableOpacity>
        //     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    timeWrap: {
        width: 60,
        height: 52,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderColor: '#0066ff',
    },
    block: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    img: {
        width: 135,
        height: 120,
        marginRight: 15,
        borderRadius: 12,
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        // borderWidth: 1,
        width: 150,
    },
    wrap: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    topPeopleWrap: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    peopleWrap: {
        backgroundColor: '#0066ff',
        width: 81,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        marginRight: 10,
    },
    line: {
        borderTopWidth: 1,
        borderColor: '#E8E8E8',
        marginVertical: 20,
    },
    deadline: {
        alignItems: 'center'
    },
    deadlineTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputWrap: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deadlineInput: {
        borderRadius: 50,
        width: 53,
        height: 53,
        backgroundColor: '#EBEBEB',
        textAlign: 'center',
    },
    time: {
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    talkBox: {
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 12,
        height: 217,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000000'
    },
    talk:{
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    profileWrap: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        width: 64,
        height: 64,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    startBtn: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 35,
        paddingHorizontal: 35,
        paddingBottom: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        // elevation: 2
      },
      buttonOpen: {
        // backgroundColor: "#F194FF",
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center"
      }
})

export default ChallengeDetail;