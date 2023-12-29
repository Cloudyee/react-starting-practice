import {createStore} from 'redux'

//식별자의 이름을 한번에 정의하고 이를 활용할 수 있다.
//프로젝트가 커져 다양한 상태가 생기게 되면, 이러한 상태들을 한번에 복사해야하는 상황이 올 수 있다.
//이러한 상황을 해결하기 위해 
/*
1. 아래와같이 설정하여 활용할 수 있다.
2. 리듀서를 어려개의 리듀서로 나눌 수 있다.
3. Redux toolkit이라는 써드 파티를 활용한다! => 해당 방법을 채택하여 활용한다!!!
*/
export const INCREMENT = 'increment';

const intialState = {counter:0, showCounter:true};
const counterReducer = (state=intialState, action)=>{
    if(action.type==='increment'){
        return {
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }
    if(action.type==='decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter

        }
    }
    if(action.type==='increase'){
        return{
            counter:state.counter+action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type==='toggle'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        };
    }


    return state;
};


const store = createStore(counterReducer);

export default store;