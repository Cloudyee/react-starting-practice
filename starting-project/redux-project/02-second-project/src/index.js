import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './components/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Provider로 감싸 store를 제공해줄 수 있다.
//이렇게 만들면 다양한 컴포넌트 네에서 리듀서를 활용할 수 있다.
root.render(
    <Provider store = {store}>
        <App />
    </Provider>    
        );
