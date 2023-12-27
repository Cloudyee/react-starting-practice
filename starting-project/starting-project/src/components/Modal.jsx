import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({children}){
    const navigate = useNavigate()

    function closeHandler(){
        navigate('..');
    }

    return <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open className={classes.modal}>
        {children}
        </dialog>
    </>
}
//children은 항상 본문안에 담겨있는 콘텐츠를 참고한다!!!
//즉 해당 코드의 경우 PostsList가 children에 담기게 되는 것이다.
export default Modal;