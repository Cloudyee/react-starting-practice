import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

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

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
