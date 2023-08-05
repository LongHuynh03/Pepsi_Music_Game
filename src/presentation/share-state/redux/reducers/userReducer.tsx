import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { rtdb } from '../../../../core/api/url/RealTimeDB';
import { Users } from '../../../../core/model/User';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        userData: {
            keyUser: '',
            name: '',
            phone: '',
            image: '',
            react: 0,
            video: 0,
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
    },
})

// export const getUsers = createAsyncThunk(
//     'users/getUsers',
//     async (thunkAPI) => {
//         let listUsers: Users[] = [];
//         const respone = await rtdb.ref('/Users').once('value')
//             .then(
//                 (snapshot: any) => {
//                     snapshot.forEach((item: any) => {
//                         listUsers.push(item.val());
//                     })
//                 }
//             )
//         return listUsers;
//     }
// )

// export const getUserByPhone = createAsyncThunk(
//     'users/getUserByPhone',
//     async (phone, { dispatch }) => {
//         const user: Users = {};
//         const respone = await rtdb.ref('users')
//             .once('value', (value: any) => {
//                 value.forEach((data: any) => {
//                     if (data.val().phone == phone) {
//                         user.key = data.key,
//                             user.phone = data.val().phone,
//                             user.name = data.val().name,
//                             user.image = data.val().image,
//                             user.react = data.val().react,
//                             user.video = data.val().video
//                     }
//                 })
//             })
//         return user;
//     }
// )
export const userReducer = userSlice.reducer;
export const { addUser } = userSlice.actions;

export const userSelecter = (state: any) => state.userReducer.userData;




