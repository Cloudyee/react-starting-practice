import { useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter =  useSelector(state=>state.counter.counter);
  const show = useSelector(state=>state.counter.showCounter)

  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  };

  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  };

  const increaseHandler=()=>{
    dispatch(counterActions.increase(5));//자동으로 액션연산자를 생성하여 전달함 {type: SOME_UNIQUE_IDENTIFIER, payload:10}
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
