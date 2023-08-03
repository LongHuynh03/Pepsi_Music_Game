import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import Icon from 'react-native-vector-icons/Octicons'
import { Colors } from '../../../../resource/value/Colors';
import ItemNewVideo, { ItemNewVideoProps } from './NewVideo.item'
import { CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, IMAGE_FRAME_1_1X, IMAGE_FRAME_2_1X, IMAGE_FRAME_3_1X, IMAGE_FRAME_4_1X } from '../../../../../../assets'

const DATA: ItemNewVideoProps[] = [
    {
        id: 1,
        title: "Tiền nhiều để làm gì",
        author: 'Gducky ft.Lưu Hiền Trinh',
        image: IMAGE_FRAME_1_1X,
        createAt: '19.02.2021',
        view: 10000,
        like: 10000
    },
    {
        id: 2,
        title: "Tiền nhiều để làm gì",
        author: 'Gducky ft.Lưu Hiền Trinh',
        image: IMAGE_FRAME_2_1X,
        createAt: '19.02.2021',
        view: 10000,
        like: 10000
    },
    {
        id: 3,
        title: "Tiền nhiều để làm gì",
        author: 'Gducky ft.Lưu Hiền Trinh',
        image: IMAGE_FRAME_3_1X,
        createAt: '19.02.2021',
        view: 10000,
        like: 10000
    },
    {
        id: 4,
        title: "Tiền nhiều để làm gì",
        author: 'Gducky ft.Lưu Hiền Trinh',
        image: IMAGE_FRAME_4_1X,
        createAt: '19.02.2021',
        view: 10000,
        like: 10000
    },
]

const NewVideo = () => {
    return (
        <Background>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <ItemNewVideo
                        id={item.id} 
                        title={item.title} 
                        author={item.author}
                        image={ item.image} 
                        createAt={item.createAt} 
                        view={item.view} 
                        like={item.like} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </Background>
    )
}

export default NewVideo

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
})