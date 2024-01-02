import { createSlice } from '@reduxjs/toolkit';

const intialCountState = {counter:0, showCounter:true};
const counterSlice = createSlice({ //이를 사용하면 원래의 값을 변경시키지 않고도 손쉽게 이를 운용할 수 있다. 
    name : 'counter',
    initialState : intialCountState,
    reducers : {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter+action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
