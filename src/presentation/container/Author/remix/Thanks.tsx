import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import { TALEN } from '../../../../../assets'

const Thanks = () => {
    return (
        <Background>
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Text style={styles.text}>CHÚC MỪNG BẠN</Text>
                    <Text style={styles.text1}>ĐÃ HOÀN THÀNH</Text>
                    <Text style={styles.text2}>BẢN THU !</Text>
                </View>

                <View style={styles.main}>
                    <Image source={TALEN} style={styles.imageTalen} />

                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonXem}
                        title='Xem bản thu'
                    />
                    <Button
                        containerStyle={styles.buttonPass}
                        title='Bỏ qua'
                        //  onPress={SignUpScreen}
                        titleStyle={styles.title} />
                </View>
            </View>
        </Background>
    )
}

export default Thanks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: Colors.WHITE,
        fontSize: 45,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
        marginTop: '25%',

    },
    text1: {
        color: Colors.WHITE,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
    },
    text2: {
        color: Colors.WHITE,
        fontSize: 35,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
    },
    main: {
        marginTop: - Dimensions.get('screen').height * 0.3,
        alignItems: 'center',
    },
    imageTalen: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
    },
    boxButton: {
        width: Dimensions.get('screen').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('screen').height * 0.45,
        alignItems: 'center'
    },
    imageButton: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.8 / 2.3,
    },
    buttonXem: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.06,
    },
    buttonPass: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.06,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    title: {
        color: Colors.WHITE,
    },


})