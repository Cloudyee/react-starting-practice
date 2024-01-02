import { createSlice } from "@reduxjs/toolkit";
//객체로 변환
const cartSlice = createSlice({
    name:'ui',
    initialState : {cartIsVisible : false},
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        }
    }
});
