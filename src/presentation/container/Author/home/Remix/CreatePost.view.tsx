import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../../component/header/Header'
import { CARD_PEPSI_2, THUMB_MUSIC_4X } from '../../../../../../assets'
import Background from '../../../../component/background/Background'
import Button from '../../../../component/button/Button'
import { Colors } from '../../../../resource/value/Colors'
import Slider from '@react-native-community/slider'
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIconIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import DialogLoad from '../../../../component/dialog/DialogLoad'
import DialogNotification from '../../../../component/dialog/DialogNotification'
const CreatePost: React.FC<RemixStackScreenProps<'CreatePost'>> = ({ navigation, route }) => {
    // const CreatePost = () => {

    const [isStart, setisStart] = useState(false);
    const [isVisibile, setisVisibile] = useState(false);
    const [isDelete, setisDelete] = useState(false)


    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <View style={styles.centerHeader}>
                    <Text style={styles.rule}>Tiền nhiều để làm gì</Text>
                    <Text style={styles.rule2}>Gducky ft.Lưu Hiền Trinh</Text>
                </View>
            </View>
        )
    }

    const goBack = () => {
        navigation.navigate('AcceptAnimation');
    };

    const goForward = () => {
        console.log(123)
        setisVisibile(true);
        setisStart(true);
    };

    const doCancel = () => {
        setisDelete(true)
    };

    const goEdit = () => {
        navigation.navigate('EditNameSong');
    };

    const deleteRecord = () => {
        setisDelete(false)
        navigation.navigate('Recording');
    };

    const noDelete = () => {
        setisDelete(false);
    };

    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={
                        <AntDesignIcon name="arrowleft" size={20} color={Colors.WHITE} />
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()}
                />
                <View style={styles.gr}>
                    <Image source={CARD_PEPSI_2} style={styles.img} />
                    <View style={styles.boxSilder}>
                        <Text style={styles.textTime}>00:00</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={10}
                            minimumTrackTintColor={Colors.RED_BAR}
                            maximumTrackTintColor={Colors.WHITE}
                            thumbImage={THUMB_MUSIC_4X}
                        />
                        <Text style={styles.textTime}>05:00</Text>
                    </View>
                    <View style={styles.grbottom}>
                        <View style={styles.leftgr}>
                            <View style={styles.grMini}>
                                <View style={styles.textTitle_1}>
                                    <Text style={styles.textTitle}>Tiền nhiều để làm gì</Text>
                                    <TouchableOpacity onPress={goEdit}>
                                        <MaterialCommunityIconIcon name='pencil-outline' color={Colors.WHITE} size={15} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textMini}>Gducky ft.Lưu Hiền Trinh</Text>
                            </View>

                        </View>
                        <View style={styles.boxShare}>
                            <TouchableOpacity>
                                <FeatherIcon name='share-2' color={Colors.WHITE} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonTao}
                        title='Xong'
                        onPress={goForward}
                    />
                    <Button
                        containerStyle={styles.buttonBo}
                        title='Hủy Bỏ'
                        onPress={doCancel}
                        titleStyle={styles.title} />
                </View>
            </View>
            {
                isVisibile ?
                    <DialogLoad
                        isStart={isStart}
                        isVisibile={isVisibile}
                        navigation={navigation}
                    />
                    : <View></View>
            }
            {
                isDelete ?
                <DialogNotification
                title='Bạn có muốn hủy bản ghi âm này không'
                btnLeft='Không'
                btnRight='Có'
                isVisibile={isDelete}
                onPressL={noDelete}
                onPressR={deleteRecord}
                />
                :
                <View></View>
            }
        </Background>

    )
}

export default CreatePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    centerHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    rule: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    rule2: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_2_300,
    },
    boxSilder: {
        width: Dimensions.get('window').width * 0.881,
        height: Dimensions.get('window').height * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('window').width * 0.09,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 12,
    },
    slider: {
        width: "80%",
    },
    textTime: {
        color: Colors.WHITE,
    },
    gr: {
        height: Dimensions.get('screen').height * 0.63,
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: '#0054A16E',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: Colors.BLUE_2_300,
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    img: {
        height: Dimensions.get('screen').height * 0.52,
        width: Dimensions.get('screen').width * 0.89,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    imgTime: {
        alignSelf: 'center',
        marginTop: Dimensions.get('screen').height * 0.01,
    },
    grbottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.01,
    },
    leftgr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: Dimensions.get('screen').width * 0.03,
    },
    grMini: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imgPen: {
        resizeMode: 'contain',
        marginStart: 10
    },
    textTitle_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    textMini: {
        fontFamily: 'Montserrat',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.GRAY,
    },
    boxShare: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 4,
        backgroundColor: Colors.BACKGROUND_MIC, //rgba(255, 255, 255, 0.3)
        borderColor: Colors.WHITE,
        borderWidth: 1,
        marginEnd: Dimensions.get('screen').width * 0.03,
    },
    share: {
        resizeMode: 'contain',
    },
    boxButton: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        marginTop: Dimensions.get('screen').height * 0.04,
        alignItems: 'center',
    },
    buttonTao: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.06,
    },
    buttonBo: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.06,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    title: {
        color: Colors.WHITE,
    },

})