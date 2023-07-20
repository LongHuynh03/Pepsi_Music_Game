import { StyleSheet, Switch, Text, View, ImageBackground, Pressable, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { BACKGROUND_TAB, BACK, SUBTRACT, SUBTRACT_HIDE, CENTER_BUTTON, TIME, RECORD_BACK, CHECK,PERFORM, VOLUME,PLAY } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'



const Remix = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Background>

            <ImageBackground source={BACKGROUND_TAB} style={styles.headline}>
                <Pressable >
                    <Image source={BACK} style={styles.iconBack} />
                </Pressable>
                <View style={styles.beat}>
                    <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                    <Text style={styles.casi}>GDucky ft.Lưu Hiền Trinh</Text>
                </View>
                <Pressable  >
                    <Image source={SUBTRACT} style={styles.iconSubTract} />
                </Pressable>
            </ImageBackground>

            <View style={styles.group}>
                <View style={styles.group1}>
                    <View style={styles.Volume}>
                        <Image source={VOLUME} style={styles.ImgVolume} />
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>Auto Tune</Text>
                        </Pressable>
                    </View>
                    <View style={styles.Volume}>
                        <Image source={VOLUME} style={styles.ImgVolume} />
                        <Pressable style={styles.button1}>
                            <Text style={styles.text}>Fast Flow</Text>
                        </Pressable>
                    </View>
                    <View style={styles.Volume}>
                        <Image source={VOLUME} style={styles.ImgVolume} />
                        <Pressable style={styles.button1}>
                            <Text style={styles.text}>Voice Pitch</Text>
                        </Pressable>
                    </View>


                </View>
                <View style={styles.group2}>
                    <Text style={styles.textVoice}>Voice Remix (Manual)</Text>
                    <Switch
                        style={styles.on}
                        trackColor={{ false: '#767577', true:  '#005cb2' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Image source={PERFORM} style={styles.Perform} />
<Image source={PLAY} style={styles.Play} />


            </View>



            <View style={styles.boxButton}>
                <Button
                    containerStyle={styles.buttonXem}
                    title='Tiếp theo'
                />
                <Button
                    containerStyle={styles.buttonPass}
                    title='Hủy Bỏ'
                    titleStyle={styles.title} />
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

    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: '20%',
    },
    iconSubTract: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: '40%',
    },
    beat: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    baihat: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').height * 0.03,
    },
    casi: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_CASI,
        marginLeft: Dimensions.get('window').height * 0.03,

    },
    group: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 12,
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.6,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').height * 0.025,

    },

    group1: {
        marginTop: Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    
    Volume: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 12,
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height * 0.4,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').height * 0.025,
    },
    ImgVolume: {
        marginTop: Dimensions.get('window').height * 0.02,
    },
    button: {
        backgroundColor: Colors.RED,
        width: Dimensions.get('window').width * 0.142,
        height: Dimensions.get('window').height * 0.05,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderColor: Colors.RED,
        alignItems: 'center',
marginTop: Dimensions.get('window').height * 0.005,
    },
    button1: {
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.142,
        height: Dimensions.get('window').height * 0.05,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderColor: Colors.BLUE,
        alignItems: 'center',

        marginTop: Dimensions.get('window').height * 0.005,
    },
    text: {
        fontSize: 12,
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 16,
        textAlign: 'center',


    },
    group2: {
        marginTop: Dimensions.get('window').height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    textVoice: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontWeight: '900',
        lineHeight: 21,
        textAlign: 'center',
        marginLeft: - Dimensions.get('window').width * 0.01,

    },
    on:{
        marginLeft: Dimensions.get('window').width * 0.1,
        
    },
    Perform:{
        marginTop: Dimensions.get('window').height * 0.03,
    },
    Play:{
        marginTop: Dimensions.get('window').height * 0.005,
    },


    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        marginHorizontal: Dimensions.get('window').height * 0.025,
    },

    buttonXem: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.075,

    },
    buttonPass: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.075,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('window').height * 0.2,
        marginLeft: -Dimensions.get('window').width * 0.8,
    },
    title: {
        color: Colors.WHITE,
    },

})