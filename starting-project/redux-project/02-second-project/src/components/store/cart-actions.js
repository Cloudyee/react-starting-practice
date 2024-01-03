import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData=()=>{
    return async (dispatch)=>{
        const fetchData=async()=>{
            const response = await fetch(
                'https://react-practice-fd7f5-default-rtdb.firebaseio.com/cart.json'
                );    
                console.log("요청 도달")
                if(!response.ok){
                    throw new Error('Coul not fetch cart data!')
                }
                const data = await response.json();
                
                return data;
            };

            try{
                const cartData = await fetchData();
                dispatch(cartActions.replaceCart({
                    //장바구니 데이터가 빈값인 경우 고려
                    items : cartData.items || [],
                    totalQuantity : cartData.totalQuantity,
                }));
            }catch(error){
            //에러 발생시 오류 알림을 dispatch
            dispatch(uiActions.showNotification({
                status:'error',
                title: 'Error!',
                message : 'Sent cart data failed...'
            }));
        };
    }
};

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
                body:JSON.stringify(
                    {
                        items: cart.items, 
                        totalQuantity: cart.totalQuantity
                    }),
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
        //에러 발생시 오류 알림을 dispatch
        dispatch(uiActions.showNotification({
            status:'error',
            title: 'Error!',
            message : 'Sent cart data failed...'
        }));
    };

    }
};
