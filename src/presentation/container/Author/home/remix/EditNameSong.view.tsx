import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import { Colors } from '../../../../resource/value/Colors'
import Header from '../../../../component/header/Header'
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const EditNameSong: React.FC<RemixStackScreenProps<'EditNameSong'>> = ({navigation, route}) => {
 
    // const EditNameSong = () => {

        const [text, setText] = React.useState('')

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

    const clearText = () => {
        setText('');
    }

    return (
        <Background>
            <ScrollView style={styles.container}>
                <Header
                    iconLeft={
                        <AntDesignIcon name = "arrowleft" size={20} color={Colors.WHITE}/>
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()}
                    iconRight={
                        <Text style = {styles.txtLuu}>Lưu</Text>
                    }
                    rightHeader={goBack} />
                <View style={styles.content}>
                    <View style={styles.beat}>
                        <TextInput
                        value={text}
                        onChangeText={(text) => setText(text)}
                            style={styles.edt}
                            placeholder='Tiền nhiều để làm gì' />
                            <TouchableOpacity style = {styles.btnDelete} onPress={clearText}>
                                <AntDesignIcon name='close' color={'rgba(119, 174, 240, 1)'} size={20}/>
                            </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.text1}>{text.length}/40 ký tự</Text>
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
    },
    txtLuu: {
        fontSize: 14,
        color: 'rgba(43, 153, 255, 0.6)'
    },
    btnDelete: {
        borderRadius: 50,
        padding: 4,
        backgroundColor:'rgba(230, 237, 245, 1)'
    }
})