import { StyleSheet, Text, View, ScrollView, ImageBackground, Pressable, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import {  ICON_LEFTARROW, ICON_TEXT_LUU, ICON_X } from '../../../../../../assets'
import { Colors } from '../../../../resource/value/Colors'
import Header from '../../../../component/header/Header'
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation'

const EditNameSong: React.FC<RemixStackScreenProps<'EditNameSong'>> = ({navigation, route}) => {
 
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Beat mới nhất</Text>
            </View>
        )
    }

    const goBack = () => {
        navigation.navigate('CreatePost')
    }

    return (
        <Background>
            <ScrollView style={styles.container}>
                <Header
                    iconLeft={ICON_LEFTARROW}
                    leftHeader={goBack}
                    centerHeader={centerHeader()}
                    iconRight={ICON_TEXT_LUU}
                    rightHeader={goBack} />
                <View style={styles.content}>
                    <View style={styles.beat}>
                        <TextInput
                            style={styles.edt}
                            placeholder='Tiền nhiều để làm gì' />
                        <Image source={ICON_X} style={styles.iconC} />
                    </View>
                </View>
                <Text style={styles.text1}>22/40 ký tự</Text>
            </ScrollView>
        </Background>
    )
}

export default EditNameSong

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    text1: {
        color: Colors.WHITE,
        margin: 20,
    },
    iconC: {},
    content: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    beat: {
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.9 ,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 56,
        backgroundColor: Colors.WHITE,
    },
    edt: {
        width: '80%',
    }
})