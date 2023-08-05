import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors'
import Button from '../../../../component/button/Button'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import { ANIMATION_1_1X, ANIMATION_2_1X, ANIMATION_3_1X, CARD_PEPSI_2_1x, THUMB_MUSIC_4X } from '../../../../../../assets'
import Slider from '@react-native-community/slider'
import LinearGradient from 'react-native-linear-gradient'
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import DialogNotification from '../../../../component/dialog/DialogNotification'

const CreateAnimation: React.FC<RemixStackScreenProps<'CreateAnimation'>> = ({ navigation, route }) => {

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

    const [clickedId, setclickedId] = React.useState(1);
    const [noAnimation, setnoAnimation] = React.useState(false)

    const goBack = () => {
        navigation.navigate('AcceptAnimation')
    };

    const goForward = () => {
        navigation.navigate('CreatePost')
    };

    const goNoAni = () => {
        setnoAnimation(true);
    };

    const onCancel = () => {
        setnoAnimation(false);
    }

    const changAnimation = () => {
        if (clickedId == 1) {
            return 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Card_Pepsi_1.png?alt=media&token=4726fa8c-7a12-4481-9e44-008e4c3d69cb';
        }
        if (clickedId == 2) {
            return 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Card_2_1x.png?alt=media&token=cb632021-a6f8-453b-bd66-5b715dee4cc7';
        }
        if (clickedId == 3) {
            return 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Card_Pepsi_3.png?alt=media&token=e423028c-88b6-41c0-99ac-0dda92034ea4';
        }
        return 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Card_Pepsi_1.png?alt=media&token=4726fa8c-7a12-4481-9e44-008e4c3d69cb';
    }


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
                <View style={styles.content}>
                    <View style={styles.banner}>
                        <Image source={{uri: changAnimation()}} style={styles.imgCover} />
                        <LinearGradient colors={[Colors.LINEARGRADIENT_1, Colors.LINEARGRADIENT_2]} style={styles.boxSilder}>
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
                        </LinearGradient>
                    </View>
                    <View style={styles.grbox}>
                        <TouchableOpacity
                            onPress={() => { setclickedId(1) }}
                            style={styles.box}>
                            <Image source={ANIMATION_1_1X}
                                key={1}
                                style={1 === clickedId ? styles.roundChoose : styles.round} />
                            <Text style={styles.text_round}>Old School</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setclickedId(2) }}
                            style={styles.box}>
                            <Image source={ANIMATION_2_1X}
                                key={2}
                                style={2 === clickedId ? styles.roundChoose : styles.round} />
                            <Text style={styles.text_round}>Modern</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setclickedId(3) }}
                            style={styles.box}>
                            <Image source={ANIMATION_3_1X}
                                key={3}
                                style={3 === clickedId ? styles.roundChoose : styles.round} />
                            <Text style={styles.text_round}>Free Style</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxButton}>
                        <Button
                            containerStyle={styles.buttonTao}
                            title='Bỏ qua'
                            titleStyle={styles.title}
                            onPress={goNoAni}
                        />
                        <Button
                            containerStyle={styles.buttonBo}
                            title='Xác nhận'
                            onPress={goForward}
                            titleStyle={styles.title1} />
                    </View>
                </View>
            </View>
            {
                noAnimation ?
                <DialogNotification
                title='Bạn không chọn animation nào cả'
                btnLeft='Quay lại'
                btnRight='Xác nhận'
                isVisibile= {noAnimation}
                onPressL={onCancel}
                onPressR={goForward}
                />
                :
                <View></View>
            }
        </Background>

    )
}

export default CreateAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        marginTop: Dimensions.get('window').height * 0.03,
        marginBottom: Dimensions.get('window').height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCover: {
        marginBottom: Dimensions.get('window').height * 0.015,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.WHITE,
        height: Dimensions.get('window').height * 0.6,
        width: Dimensions.get('window').width * 0.9,

    },
    boxSilder: {
        width: Dimensions.get('window').width * 0.881,
        height: Dimensions.get('window').height * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('window').width * 0.04,
        marginTop: - Dimensions.get('window').height * 0.047,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 12,
    },
    slider: {
        width: "80%",
    },
    textTime: {
        color: Colors.WHITE,
    },
    textCover: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    grbox: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
    },
    roundChoose: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.WHITE,
    },
    round: {
        borderRadius: 50,
        borderWidth: 2,
    },
    text_round: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'space-between',
        marginTop: Dimensions.get('window').height * 0.03,
        alignItems: 'center',
    },
    buttonTao: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: Colors.BACKGROUND_FORM,

    },
    buttonBo: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.06,
    },
    title: {
        color: Colors.WHITE,
    },
    title1: {
        color: Colors.BLUE_PEPSI,
    },

})