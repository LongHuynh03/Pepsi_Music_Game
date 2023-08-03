import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, userSelecter } from '../src/presentation/share-state/redux/reducers/userReducer';

const TestOTP = () => {

    const dispatch = useDispatch();

    console.log(
        dispatch(
            addUser({
                key: 1
            }))
    )
    const data = useSelector(userSelecter);

    const clickTest = () => {
        console.log(data);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ borderWidth: 1, width: 100, height: 200 }} onPress={clickTest}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TestOTP

const styles = StyleSheet.create({})