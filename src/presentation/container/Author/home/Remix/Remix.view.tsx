import { Modal, StyleSheet, Switch, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import { ICON_LEFTARROW, ICON_PLAY_1X, ICON_PLAY_1_5X, OPTION_1, OPTION_2, OPTION_3, THUMB_MUSIC_4X } from '../../../../../../assets';
import { Colors } from '../../../../resource/value/Colors';
import Button from '../../../../component/button/Button';
import Slider from '@react-native-community/slider';
import DialogNotification from '../../../../component/dialog/DialogNotification';
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation';



const Remix: React.FC<RemixStackScreenProps<'Remix'>> = ({navigation, route}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);

    const [title, setTitle] = useState<string>();
    const [btnLeft, setBtnLeft] = useState<string>();
    const [btnRight, setBtnRight] = useState<string>();
    const [onHuy, setonHuy] = useState(false);
    const [onBack, setonBack] = useState(false);
    const [onSubmit, setonSubmit] = useState(false);
    const [isExit, setisExit] = useState(false);

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

    const onClick = (type: string) => {
        if (type === "Huy") {
            setTitle("Bạn có chắc muốn xóa bản thu âm này ?");
            setBtnLeft("Không");
            setBtnRight("Có");
            setonHuy(true);
            setModalVisible(true);
        }
        if (type === "back") {
            setTitle("Nếu bạn trở về bản thu âm này sẽ không được lưu");
            setBtnLeft("Rời khỏi");
            setBtnRight("Tiếp tục");
            setonBack(true);
            setModalVisible(true);
        }
        if (type === "submit") {
            setTitle("Vui lòng xác nhận nếu bạn đã remix xong");
            setBtnLeft("Quay lại");
            setBtnRight("Xác nhận");
            setonSubmit(true);
            setisExit(true);
            setModalVisible(true);
        }
    };

    const onDelete = () => {
        if (onHuy) {
            setonHuy(false);
            setModalVisible(false);
            //navigation
            navigation.navigate('Recording')
        }
        if (onBack) {
            setonBack(false);
            setModalVisible(false);
            //navigation
            navigation.navigate('Recording')
        }
        if (onSubmit) {
            setonSubmit(false);
            setisExit(false);
            setModalVisible(false);
            navigation.navigate('AcceptAnimation')
        }
    };

    const onCancel = () => {
        setonHuy(false);
        setonBack(false);
        setonSubmit(false);
        setisExit(false);
        setModalVisible(false);
    };

    const onExit = () => {
        setisExit(false);
        setModalVisible(false);
    }

    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={ICON_LEFTARROW}
                    leftHeader={() =>onClick("back")}
                    centerHeader={centerHeader()}
                />
                <View style={styles.content}>
                    <View style={styles.boxOptions}>
                        <View style={styles.boxOption_1}>
                            <Image source={OPTION_1} style={styles.imgOptions} />
                            <Image source={OPTION_2} style={styles.imgOptions} />
                            <Image source={OPTION_3} style={styles.imgOptions} />
                        </View>
                        <View style={styles.boxOption_2}>
                            <Text style={styles.txtOption_2}>Voice Remix (Manual)</Text>
                            <Switch
                                style={styles.on}
                                trackColor={{ false: Colors.GRAY, true: Colors.WHITE }}
                                thumbColor={isEnabled ? Colors.RED_BAR : Colors.WHITE}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View style={styles.boxSilder}>
                            <Text style={styles.textTime}>00:00</Text>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor={Colors.RED_BAR}
                                maximumTrackTintColor={Colors.BLACK}
                                thumbImage={THUMB_MUSIC_4X}
                            />
                            <Text style={styles.textTime}>05:00</Text>
                        </View>
                        <View style={styles.boxPlay}>
                            <Image style={styles.imgPlay} source={ICON_PLAY_1X} />
                        </View>
                    </View>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonXem}
                        title='Tiếp theo'
                        onPress={() =>onClick("submit")}
                    />
                    <Button
                        containerStyle={styles.buttonPass}
                        title='Hủy Bỏ'
                        titleStyle={styles.title}
                        onPress={() => onClick("Huy")}/>
                </View>
                {
                    modalVisible ? <DialogNotification
                        title= {title}
                        btnLeft= {btnLeft}
                        btnRight= {btnRight}
                        isVisibile={modalVisible}
                        onPressL={onCancel}
                        onPressR={onDelete}
                        isExit={isExit}
                        onPressE={onExit}
                    />
                        :
                        <View></View>
                }

            </View>
        </Background>
    )
}

export default Remix

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    content: {
        marginTop: Dimensions.get('screen').height * 0.03
    },
    boxOptions: {
        width: Dimensions.get('screen').width * 0.9,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.BACKGROUND_FORM,
        padding: Dimensions.get('screen').width * 0.05
    },
    boxOption_1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgOptions: {
    },
    boxOption_2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    txtOption_2: {
        fontSize: 14,
        color: Colors.WHITE,
        fontWeight: '600',
        lineHeight: 21
    },
    on: {

    },
    boxSilder: {
        width: "100%",
        height: Dimensions.get('window').height * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.01
    },
    slider: {
        width: "70%",
    },
    textTime: {
        color: Colors.WHITE,
    },
    boxPlay: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: Dimensions.get('screen').height * 0.02
    },
    imgPlay: {

    },
    boxButton: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        marginTop: Dimensions.get('screen').height * 0.04,
        alignItems: 'center',
    },

    buttonXem: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.06,

    },
    buttonPass: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.06,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    title: {
        color: Colors.WHITE,
    },

    //dialog
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 16,
        padding: 35,
        alignItems: 'center',
    },
    boxButtonDialog: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    buttonLeft: {
        width: Dimensions.get('screen').width * 0.25,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.WHITE,
    },
    buttonRight: {
        width: Dimensions.get('screen').width * 0.25,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        padding: 10,
    },
    textLeft: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textRight: {
        color: Colors.BLUE_PEPSI,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.WHITE
    },
})