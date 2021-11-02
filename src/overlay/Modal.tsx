import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import { useRef } from 'react';
import { useDispatch } from "react-redux";
import{update} from '../store/store'

const BackDrop:React.FC<{onClick:()=>void; } > = (
  props
) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};
const ModalOverlay:React.FC<{placeholder:string;oncancel:()=>void;ondone:()=>void}> = (props) => {

const dispatch=useDispatch()
  const todoTextInputRef = useRef(null);

const updateref=()=>{
  const enteredText = todoTextInputRef.current.value;
  
  dispatch(update(enteredText))

};
 
   
  return (
    <div  className={classes.form}>
    <input spellCheck="false" onKeyUp={updateref} ref={todoTextInputRef} placeholder={props.placeholder} type='text' id='text' />
    <button onClick={props.oncancel} className={classes.cancel}>Cancel</button>
    <button onClick={props.ondone} className={classes.done}>Done</button>
   </div>
  
  );
};
const portalElement = document.getElementById("modal");


const Modal :React.FC<{onClick:()=>void;placeholder:string;oncancel:()=>void;ondone:()=>void}>= (props) => {
 
  return (
    <Fragment>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay placeholder={props.placeholder} oncancel={props.oncancel} ondone={props.ondone} >{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
