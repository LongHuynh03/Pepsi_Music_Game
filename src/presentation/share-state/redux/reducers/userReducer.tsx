import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {
            uid: '',
            token: '',
        }
    },
    reducers : {
        addUser : (state, action) => {
            state.userData = action.payload;
        },
    }
})

export const userReducer = userSlice.reducer;

export const {addUser} = userSlice.actions;

export const userSelecter = (state : any) => state.userReducer.userData;
