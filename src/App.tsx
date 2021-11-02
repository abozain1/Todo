import classes from './app.module.css'

import Todos from './components/Todos';

import Modal from './overlay/Modal'

import { useDispatch,useSelector } from 'react-redux'
import { addTodo, edit, selectcontent, selectshow, selectshow2, showhandler, showhandler2 } from './store/store';



function App() {
 const show=useSelector(selectshow)
 const show2=useSelector(selectshow2)
 const content=useSelector(selectcontent)
 
 
  const dispatch=useDispatch();

  return (
   
      <div className={classes.holder}>

      <h1 className={classes.headline}>Todo List</h1>
    
      <Todos />
      {show2&&<Modal placeholder='Edit your Task..' onClick={()=>dispatch(showhandler2())} ondone={()=>dispatch(edit(content))} oncancel={()=>dispatch(showhandler2())}/>}
 {show&&<Modal placeholder='Type Any Task..' onClick={()=>dispatch(showhandler())} ondone={()=>{dispatch(addTodo(content)); dispatch(showhandler())}} oncancel={()=>dispatch(showhandler())} />}
      </div>
    
  );
}

export default App;
