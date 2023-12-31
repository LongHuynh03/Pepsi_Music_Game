import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { CENTER_BUTTON_1X, CENTER_BUTTON_2X, HEADLINE_2, LEFT_BUTTON, RIGHT_BUTTON, TALEN } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/stack/StackNavigation'
import Background from '../../../component/background/Background'

const FirstLogIn: React.FC<MainStackScreenProps<'FirstLogIn'>>= ({navigation,route}) => {

    const onClick = () => {
        navigation.navigate('LogIn');
    }

    const rules = () => {
        navigation.navigate('Rules');
    }

    const instruct = () => {
        navigation.navigate('Instruct');
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.headline}>
                    <Image source={HEADLINE_2} style={styles.image} />
                </View>
                <View style={styles.main}>
                    <Image source={TALEN} style={styles.imageTalen} />
                    <View style = {styles.boxButton}>
                        <TouchableOpacity style = {styles.btn} onPress={rules}>
                            <ImageBackground  source={LEFT_BUTTON} style = {styles.imageButton}>
                                <Text style = {styles.textButton}>THỂ LỆ</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.btn} onPress={onClick}>
                            <Image source={CENTER_BUTTON_2X} style = {styles.imageButton}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.btn} onPress={instruct}>
                            <ImageBackground  source={RIGHT_BUTTON} style = {styles.imageButton}>
                                <Text style = {styles.textButton}>HƯỚNG DẪN</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default FirstLogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height*0.1,
    },
    main: {
        marginTop: - Dimensions.get('window').height*0.35,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.6,
    },
    imageTalen: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width*0.9,
        justifyContent: 'space-between',
        marginTop: '-130%'
    },
    btn: {
        width: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageButton: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.8 /2.3
    },
    textButton: {
        color: Colors.WHITE,
        padding: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '700',
    },

})