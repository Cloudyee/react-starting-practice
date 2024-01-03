import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

//객체로 변환
const cartSlice = createSlice({
    name:'cart',
    initialState : {
        items : [], //항목들
        totalQuantity: 0 ,
    },
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;
            //해당 항목이 이미 존재하는지 여부 확인
            const existingItem = state.items.find(item=> item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                //리덕스는 원래 본래의 값을 바꾸면 안된다.
                //리덕스 툴킷에서 이를 자동으로 설정해주기 때문에 우리는 .push를 활용할 수 있다.
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice : newItem.price, 
                    name: newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice+newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item=>item.id ===id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                //id와 일치하지 않는 모든 항목을 유지
                state.items = state.items.filter(item=>item.id!==id);
            } else{
                existingItem.quantity --;
                existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
            }
        }
    }
});

export const sendCartData = (cart) =>{
    return async (dispatch)=>{

        //notification dispatch
        dispatch(uiActions.showNotification({
            status:'pending',
            title: 'Sending...',
            message : 'Sending cart data!'
          })
        );
    

    //비동기 함수
    //요청을 전송
    const sendRequest = async()=>{
        const response = await fetch('https://react-practice-fd7f5-default-rtdb.firebaseio.com/cart.json',
            {
                method:'PUT', 
                body:JSON.stringify(cart)
            });

            if(!response.ok){
                throw new Error('Sending cart data failed.');
            }
        };

    try{
        await sendRequest();
        //에러가 없을 시 성공문 dispatch
        dispatch(uiActions.showNotification({
            status:'success',
            title: 'Success!',
            message : 'Sent cart data successfully!'
          }))
    }catch(error){
        //에러 발생시 오류 알림을 디스페치
        dispatch(uiActions.showNotification({
            status:'error',
            title: 'Error!',
            message : 'Sent cart data failed...'
        }));
    };

    }
};

export const cartActions = cartSlice.actions;

export default cartSlice;