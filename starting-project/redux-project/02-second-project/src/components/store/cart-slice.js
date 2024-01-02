import { createSlice } from "@reduxjs/toolkit";
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
            console.log(newItem.id)
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

export const cartActions = cartSlice.actions;

export default cartSlice;