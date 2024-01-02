import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, Fragment } from 'react';
import { uiActions } from './components/store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  //state를 통해 현재 상태를 자동으로 수신
  //컴포넌트에서 활용할 데이터를 반환
  /*
  index.js의 코드를 살펴보면 아래와 같이 reudcer를 정의
    const store = configureStore({
      reducer:{ui:uiSlice.reducer}
  })
  따라서, 위 reducer의 키값 ui를 활용하여 이에 접근해야한다.
  */
  const showCart = useSelector(state=>state.ui.cartIsVisible);

  const dispatch = useDispatch();

  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=>state.ui.notification)

  //장바구니에 변경이 일어날 때 마다 요청이 날아감
  useEffect(()=>{
    const sendCartData= async()=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title: 'Sending...',
        message : 'Sending cart data!'
      }))
      const response = await fetch('https://react-practice-fd7f5-default-rtdb.firebaseio.com/cart.json',
      {
        method:'PUT', 
        body:JSON.stringify(cart)
      });

      if(!response.ok){
      dispatch(uiActions.showNotification({
        status:'error',
        title: 'Error!',
        message : 'Sent cart data failed...'
      }))
      }

      dispatch(uiActions.showNotification({
        status:'success',
        title: 'Success!',
        message : 'Sent cart data successfully!'
      }))
    };

    //처음 시작시 요청을 보내지 않음(카트 정보를 덮어씌우지 않기 위함)
    if(isInitial){
      isInitial=false;
      return;
    }
    sendCartData().catch(error=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title: 'Error!',
        message : 'Sent cart data failed...'
      }))
    });
  },[cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification 
        status = {notification.status}
        title = {notification.title}
        message = {notification.notification}
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
