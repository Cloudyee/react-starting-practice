import classes from './Modal.module.css';

function Modal({children, onClose}){
    return <>
        <div className={classes.backdrop} onClick={onClose}/>
        <dialog open className={classes.modal}>
        {children}
        </dialog>
    </>
}
//children은 항상 본문안에 담겨있는 콘텐츠를 참고한다!!!
//즉 해당 코드의 경우 PostsList가 children에 담기게 되는 것이다.
export default Modal;