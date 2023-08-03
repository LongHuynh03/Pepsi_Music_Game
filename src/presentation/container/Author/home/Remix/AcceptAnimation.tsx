import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import Button from '../../../../component/button/Button'
import { Colors } from '../../../../resource/value/Colors'
import Header from '../../../../component/header/Header'
import { CARD_PEPSI_2_1x, ICON_LEFTARROW } from '../../../../../../assets'
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const AcceptAnimation: React.FC<RemixStackScreenProps<'AcceptAnimation'>> = ({navigation, route}) => {

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
        navigation.navigate('Remix');
    };

    const goForward = () => {
        navigation.navigate('CreateAnimation')
    };

    const goSkip = () => {
        navigation.navigate('CreatePost')
    };

    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={
                        <AntDesignIcon name = "arrowleft" size={20} color={Colors.WHITE}/>
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()}
                />
                <View style = {styles.content}>
                    <View style={styles.banner}>
                        <Image source={CARD_PEPSI_2_1x} style={styles.imgCover} />
                        <Text style={styles.textCover}>Bạn có muốn tạo video animation không?</Text>
                    </View>
                    <View style={styles.boxButton}>
                        <Button
                            containerStyle={styles.buttonTao}
                            title='Tạo Animation'
                            onPress={goForward}
                        />
                        <Button
                            containerStyle={styles.buttonBo}
                            title='Hủy Bỏ'
                            onPress={goSkip}
                            titleStyle={styles.title} />
                    </View>
                </View>

            </View>
        </Background>

    )
}

export default AcceptAnimation

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
    content: {
    },
    rule: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    rule2: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_2_300,
    },
    banner: {
        marginTop: Dimensions.get('screen').height * 0.03,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCover: {
        resizeMode:'contain',
        height: Dimensions.get('screen').height * 0.55,
        marginBottom: Dimensions.get('screen').height * 0.015,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.WHITE,

    },
    textCover: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    boxButton: {
        width: Dimensions.get('window').width,
        marginTop: Dimensions.get('screen').height * 0.03,
        justifyContent: 'center',
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