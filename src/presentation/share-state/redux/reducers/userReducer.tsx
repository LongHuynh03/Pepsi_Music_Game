import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'addUser',
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
    reducers : {
        addUser : (state, action) => {
            state.userData = action.payload;
        },
    }
})

export const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;

export const userSelecter = (state : any) => state.userReducer.userData;




