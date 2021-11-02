import './TodoItem.css';
import { BsCheck2All } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import { ImCross } from 'react-icons/im';
import { MdEdit } from 'react-icons/md';





const TodoItem: React.FC<{time:string; canceled:boolean;done:boolean;showhandler:()=>void; edithandler:()=>void;cancelhandler:()=>void;donehandler:()=>void; text: string; onRemoveTodo: () => void ;} > = (
  props
) => {
  
  let valid=true;
 let stl='item';
 let stl2='icon1';
 if (props.canceled) {
   stl='canceled'
   stl2='icon12'
   valid=false
  }if(props.done){
    stl='done'
    stl2='icon12'
    valid=false
 }

  return (
    <div className={stl} >
      <div className={'txtholder'}>

     <p className={'time'}> {props.time}</p>
     <p className={'txt'}> {props.text}</p>
      </div>
     <div onClick={props.onRemoveTodo} className={stl2}><IoMdTrash/></div>
     {valid&&<div  onClick={props.showhandler} className={'icon2'}><MdEdit/></div>}
     {valid&& <div  onClick={props.cancelhandler} className={'icon3'}><ImCross/></div>}
      {valid&& <div  onClick={props.donehandler} className={'icon4'}><BsCheck2All/></div>}
    
    </div>
  );
};

export default TodoItem;
