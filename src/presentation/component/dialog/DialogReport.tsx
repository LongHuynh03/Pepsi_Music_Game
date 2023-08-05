import { Dimensions, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { Colors } from '../../resource/value/Colors'

interface Dialog {
    isVisible?: boolean,
    onCancel?: () => void,
    onAccept?: () => void,
}

const DialogReport: React.FC<Dialog> = (props) => {

    const { isVisible, onAccept, onCancel } = props;

    const [value, setValue] = useState('first');

    const [isChoose, setIsChoose] = useState(1)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Báo cáo vi phạm</Text>
                    <View style={styles.boxButton}>
                        <TouchableOpacity
                            style={isChoose == 1 ?
                                [styles.rd, styles.rdChoose] : styles.rd
                            }
                            onPress={() => {
                                setValue('Video chứa nội dung phản cảm');
                                setIsChoose(1)
                            }} />
                        <Text style={styles.problem}>Video chứa nội dung phản cảm</Text>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity
                            style={isChoose == 2 ?
                                [styles.rd, styles.rdChoose] : styles.rd
                            }
                            onPress={() => {
                                setValue('Lời nói gây xung đột hoặc gây thù ghét')
                                setIsChoose(2)
                            }} />
                        <Text style={styles.problem}>Lời nói gây xung đột hoặc gây thù ghét</Text>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity
                            style={isChoose == 3 ?
                                [styles.rd, styles.rdChoose] : styles.rd
                            }
                            onPress={() => {
                                setValue('Video spam')
                                setIsChoose(3)
                            }} />
                        <Text style={styles.problem}>Video spam</Text>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity
                            style={isChoose == 4 ?
                                [styles.rd, styles.rdChoose] : styles.rd
                            }
                            onPress={() => {
                                setValue('Đây là nội dung giả mạo')
                                setIsChoose(4)
                            }} />
                        <Text style={styles.problem}>Đây là nội dung giả mạo</Text>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity
                            style={isChoose == 5 ?
                                [styles.rd, styles.rdChoose] : styles.rd
                            }
                            onPress={() => {
                                setValue('Nội dung bạo lực')
                                setIsChoose(5)
                            }} />
                        <Text style={styles.problem}>Nội dung bạo lực</Text>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity
                            style={isChoose == 6 ?
                                [styles.rd, styles.rdChoose] : styles.rd
                            }
                            onPress={() => {
                                setValue('Khác')
                                setIsChoose(6)
                            }} />
                        <Text style={styles.problem}>Khác</Text>
                    </View>
                    <View style={styles.box_1}>
                        <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
                            <Text style={styles.txtCancel}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnAccept} onPress={onAccept}>
                            <Text style={styles.txtAccept}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>


    )
}

export default DialogReport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_DIALOG
    },
    title: {
        width: '100%',
        textAlign: 'center',
        color: Colors.WHITE,
        fontSize: 16,
        fontWeight: '700',
    },
    card: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.BLUE_PEPSI,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: Dimensions.get('screen').width * 0.05,
        borderRadius: 16
    },
    boxButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: Dimensions.get('screen').height * 0.01
    },
    rd: {
        width: Dimensions.get('screen').width * 0.05,
        height: Dimensions.get('screen').width * 0.05,
        borderRadius: 90,
        borderWidth: 1.5,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.WHITE,
        marginEnd: Dimensions.get('screen').width * 0.05
    },
    rdChoose: {
        backgroundColor: Colors.BLUE_PEPSI,
    },
    problem: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.WHITE
    },
    box_1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    btnCancel: {
        width: Dimensions.get('screen').width * 0.3,
        height: Dimensions.get('screen').height * 0.04,
        borderWidth: 2,
        borderColor: Colors.WHITE,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtCancel: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.WHITE
    },
    btnAccept: {
        width: Dimensions.get('screen').width * 0.30,
        height: Dimensions.get('screen').height * 0.04,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtAccept: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.BLUE_PEPSI
    },
})