import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth'

//식별자의 이름을 한번에 정의하고 이를 활용할 수 있다.
//프로젝트가 커져 다양한 상태가 생기게 되면, 이러한 상태들을 한번에 복사해야하는 상황이 올 수 있다.
//이러한 상황을 해결하기 위해 
/*
1. 아래와같이 설정하여 활용할 수 있다.
2. 리듀서를 어려개의 리듀서로 나눌 수 있다.
3. Redux toolkit이라는 써드 파티를 활용한다! => 해당 방법을 채택하여 활용한다!!!
*/


const store = configureStore({
    reducer:{counter:counterReducer, auth: authReducer}
});


export default store;