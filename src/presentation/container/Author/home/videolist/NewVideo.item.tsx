import { Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CARD_PEPSI_1, CARD_PEPSI_2_1x, CARD_PEPSI_2_4x } from '../../../../../../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../../../resource/value/Colors'
import LinearGradient from 'react-native-linear-gradient'

export interface ItemNewVideoProps {
    id: number,
    title: string,
    author: string,
    image: any,
    createAt: string,
    view: number,
    like: number,
}

const ItemNewVideo: React.FC<ItemNewVideoProps> = (props) => {

    const {id, title, author, image, createAt, view, like} = props;

    const [onLyric, setonLyric] = React.useState(false);
    const [onPlay, setonPlay] = React.useState(false);

    const text1 = "Nhưng mà rồi một ngày vịt bị";
    const boldAndUpperTexts1 = ["Nhưng mà rồi một ngày vịt bị"];
    const regex1 = new RegExp(`(${boldAndUpperTexts1.join('|')})`, 'gi');

    const getTextWithBoldAndUpper1 = (text1: string, boldAndUpperTexts1: any) => {
        const parts1 = text1.split(regex1);
        return parts1.map((part, index) => {
            const isBoldAndUpper1 = boldAndUpperTexts1.includes(part);
            return isBoldAndUpper1 ? (
                <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text2 = "cuốn phăng đi";
    const boldAndUpperTexts2 = ["cuốn phăng đi"];
    const regex2 = new RegExp(`(${boldAndUpperTexts2.join('|')})`, 'gi');

    const getTextWithBoldAndUpper2 = (text2: string, boldAndUpperTexts2: any) => {
        const parts2 = text2.split(regex2);
        return parts2.map((part, index) => {
            const isBoldAndUpper2 = boldAndUpperTexts2.includes(part);
            return isBoldAndUpper2 ? (
                <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };

    return (
        <View style={styles.item}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => setonLyric(false)}
                    style={styles.btnHeader}>
                    <Text style={!onLyric ?
                        styles.txtHeaderChoose : styles.txtHeader}>Video</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    onPress={() => setonLyric(true)}
                    style={styles.btnHeader}>
                    <Text style={onLyric ?
                        styles.txtHeaderChoose : styles.txtHeader}>Lời bài hát</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxImage}>
                {!onLyric ?
                    <View>
                        <TouchableOpacity style={styles.btnPlay}>
                            <Icon1 name='play' size={18} color={Colors.WHITE} />
                        </TouchableOpacity>
                        <Image style={styles.img} source={image} />
                    </View>
                    :
                    <View style = {styles.boxLyric}>
                        <View style={{ marginTop: Dimensions.get("screen").height * 0.02 }}>
                            <Text style={styles.loi}>Lại là Ducky và sau nhiều lần </Text>
                            <Text style={styles.loi}>đã bị trói buộc thì</Text>
                            <Text style={styles.loi}>Thử đoán xem hôm nay</Text>
                            <Text style={styles.loi}>thằng Ducky này có thể nói được gì</Text>
                            <Text style={styles.loi}>Three of them say to me</Text>
                            <Text style={styles.loi}>"Baby I choose this rhymes"</Text>
                            <Text style={styles.loi}>Để rồi thì chú vịt vàng</Text>
                            <Text style={styles.loi}>lại làm cho cả sở thú nhịp nhàng</Text>
                            <Text style={styles.loi}>{getTextWithBoldAndUpper1(text1, boldAndUpperTexts1)}</Text>
                            <Text style={styles.loi}>{getTextWithBoldAndUpper2(text2, boldAndUpperTexts2)}</Text>
                            <Text style={styles.loi}>Quên đi bao yêu thương xung quanh</Text>
                            <Text style={styles.loi}>chỉ để chạy theo đống money</Text>
                            <Text style={styles.loi}>Bao nhiêu suy tư, bây giờ, cần đi làm ăn gì</Text>
                            <Text style={styles.loi}>Ta bay theo hương, bay theo hoa</Text>
                            <Text style={styles.loi}>just like a bee for honey</Text>
                        </View>
                        <View style={{ marginTop: Dimensions.get("screen").height * 0.02 }}>
                            <Text style={styles.loi}>And just like that</Text>
                        </View>
                    </View>
                }
            </View>
            <LinearGradient colors={[Colors.BACKGROUND_FOOTER_1, Colors.BACKGROUND_FOOTER_2]}
                style={styles.boxFooter}>
                <View style={styles.box_1}>
                    <View style={styles.boxInfor}>
                        <Text style={styles.txtTitle}>{title}</Text>
                        <Text style={styles.txtAuthor}>{author}</Text>
                    </View>
                    <View style={styles.boxReact}>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Icon name='heart' size={20} color={Colors.WHITE} />
                            <Text style={styles.textIcon}>Thích</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Icon1 name='share' size={20} color={Colors.WHITE} />
                            <Text style={styles.textIcon}>Chia sẻ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Icon name='download' size={20} color={Colors.WHITE} />
                            <Text style={styles.textIcon}>Tải về</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Icon2 name='flag-variant' size={20} color={Colors.WHITE} />
                            <Text style={styles.textIcon}>Báo cáo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxReact_2}>
                    <View style={styles.boxText_1}>
                        <Text style={styles.txt} >AiVan.01</Text>
                    </View>
                    <View style={styles.boxRed}>
                        <View style={styles.boxRed_1} >
                            <Icon name='calendar' size={12} color={Colors.WHITE} />
                            <Text style={styles.txtRed}>{createAt}</Text>
                        </View>
                        <View style={styles.boxRed_1} >
                            <Icon name='eyeo' size={12} color={Colors.WHITE} />
                            <Text style={styles.txtRed}>{view}</Text>
                        </View>
                        <View style={styles.boxRed_1} >
                            <Icon name='hearto' size={12} color={Colors.WHITE} />
                            <Text style={styles.txtRed}>{like}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default ItemNewVideo

const styles = StyleSheet.create({
    item: {
        width: Dimensions.get('screen').width,
        marginBottom: Dimensions.get('screen').height * 0.02,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_HEADER,
        padding: "3%",
    },
    btnHeader: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtHeader: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.TEXT_AUTHOR,
        marginHorizontal: 30
    },
    txtHeaderChoose: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        marginHorizontal: 30
    },
    line: {
        height: '90%',
        borderEndWidth: 1,
        borderColor: Colors.WHITE
    },
    boxImage: {
        width: "100%",
        height: Dimensions.get('screen').height * 0.4
    },
    btnPlay: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        marginTop: '50%',
    },
    img: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.4,
        borderWidth: 1,
    },
    boxLyric: {
        backgroundColor: Colors.DARK_BLUE
    },
    loi: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.LYRIC
    },
    boxFooter: {
        justifyContent: 'center',
        padding: Dimensions.get('screen').width * 0.05,
    },
    box_1: {
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').height * 0.01,
        justifyContent: 'space-between',

    },
    boxInfor: {
        width: '45%',
        justifyContent: 'space-between',
    },
    txtTitle: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    txtAuthor: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 16,
        color: Colors.TEXT_AUTHOR,
    },
    boxReact: {
        width: "50%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    boxReact_1: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textIcon: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 12,
        color: Colors.WHITE,
        marginTop: '3%',
    },
    boxReact_2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    boxText_1: {
        flexDirection: 'row',
        width: '20%',
    },
    txt: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: Colors.BLUE_1_50,
    },
    boxRed: {
        flexDirection: 'row',
        backgroundColor: Colors.RED_BAR,
        borderRadius: 4,
    },
    boxRed_1: {
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtRed: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 16,
        color: Colors.WHITE,
        marginStart: 2,
    },
})