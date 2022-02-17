import {createSlice} from '@reduxjs/toolkit';
const authSlice=createSlice({
    name:"auth",
    initialState:{id:null, isAdmin:false},
    reducers:{
        setIsAuth:(state, action)=>{
            state.isAdmin=true
        },
    }
});

export const {setIsAuth}=authSlice.actions
export default authSlice.reducer