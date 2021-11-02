import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelhandler, donehandler, edit, removeTodo, selectcontent, selectTodos, showhandler, showhandler2 } from '../store/store';
import TodoItem from './TodoItem';
import { Button } from 'antd';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
const todos=useSelector(selectTodos);
const content=useSelector(selectcontent);

const dispatch=useDispatch()
  return (
    <div className={classes.cart}>
<div className={classes.holder}>
<div>

{todos.map((item) => (
  <TodoItem
  canceled={item.canceled}
  done={item.done}
  key={item.id}
  text={item.text}
  time={item.time}
  onRemoveTodo={()=>dispatch(removeTodo(item.id))}
  cancelhandler={()=>dispatch(cancelhandler(item.id))}
  donehandler={()=>dispatch(donehandler(item.id))}
  showhandler={()=>dispatch(showhandler2(item.id))}
  edithandler={()=>dispatch(edit(content))}
  />
  ))}
</div>

        </div>
    <Button onClick={()=>dispatch(showhandler())} className={classes.btn}>+</Button>
        </div>
  );
};

export default Todos;
