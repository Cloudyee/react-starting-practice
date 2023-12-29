import { createSlice, configureStore } from '@reduxjs/toolkit';

//식별자의 이름을 한번에 정의하고 이를 활용할 수 있다.
//프로젝트가 커져 다양한 상태가 생기게 되면, 이러한 상태들을 한번에 복사해야하는 상황이 올 수 있다.
//이러한 상황을 해결하기 위해 
/*
1. 아래와같이 설정하여 활용할 수 있다.
2. 리듀서를 어려개의 리듀서로 나눌 수 있다.
3. Redux toolkit이라는 써드 파티를 활용한다! => 해당 방법을 채택하여 활용한다!!!
*/
const intialState = {counter:0, showCounter:true};
const counterSlice = createSlice({ //이를 사용하면 원래의 값을 변경시키지 않고도 손쉽게 이를 운용할 수 있다. 
    name : 'counter',
    initialState : intialState,
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


const store = configureStore({
    reducer:counterSlice.reducer
});


export const counterActions = counterSlice.actions;
export default store;