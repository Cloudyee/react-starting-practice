import { createSlice } from "@reduxjs/toolkit";
//객체로 변환
const uiSlice = createSlice({
    name:'ui',
    initialState : {cartIsVisible : false},
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;