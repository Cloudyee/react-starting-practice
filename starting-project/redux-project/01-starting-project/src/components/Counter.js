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

//클래스 기반은 이제 많이 사용하지 않지만, 사용하는 경우도 있으니 알아두도록 하자.
// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){}

//   rander(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps=state=>{
//   return{
//     counter:state.counter
//   };
// }

// const mapDispatchToProps = dispatch=>{
//   return{
//     increment : ()=>dispatch({type:'increment'}),
//     decrement : ()=>dispatch({type:'decrement'}),
//   }
// };

export default Counter;
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
