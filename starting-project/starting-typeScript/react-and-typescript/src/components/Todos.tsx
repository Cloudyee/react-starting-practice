import React from "react";

//타입을 정의함
//함수가 함수형 컴포넌트가 됨을 명확히한다.
const Todos:React.FC<{items:string[]}> =(props)=>{
    return(
    <ul>
        {props.items.map(item=><li key={item}>{item}</li>)}
    </ul>
    );
}

export default Todos;