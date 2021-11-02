import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Todo {
  id: number;
  done: boolean;
  canceled: boolean;
  text: string;
  time: string;
}

interface TodosSliceState {
  todos: Todo[];
  show:boolean;
  show2:boolean;
  content:string;
  id:number;
}

const initialState: TodosSliceState = {
    todos: [],
    show:false,
    show2:false,
    content:'',
    id:null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length!==0) {
        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let hhh=(today.getHours())
        let m=(today.getMinutes())
        let ampm = hhh >= 12 ? 'pm' : 'am';
        let date = mm + '/' + dd + '/' + yyyy +'.....'+hhh+'.'+m+','+ampm;
        state.show=true;
        state.todos = [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
            canceled: false,
          time:date,
        },
      ];
    }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    cancelhandler: (state,action:PayloadAction<number>) => {
        let index=state.todos.findIndex((item)=>item.id===action.payload)
        state.todos[index].canceled = true;
    },
    edit: (state, action: PayloadAction<string>) => {
     
      if (action.payload.trim().length!==0) {
        
        
        let index = state.todos.findIndex((item)=>item.id===state.id);
        state.todos[index].text=action.payload;
        state.show2=false;
      }
      },
      showhandler: (state) => {
        state.show = !state.show
    },
    showhandler2: (state, action:PayloadAction<number>) => {
      state.id=action.payload;
        state.show2 = !state.show2
        
    },
    donehandler: (state, action: PayloadAction<number>) => {
      
        let index=state.todos.findIndex((item)=>item.id===action.payload)
        state.todos[index].done = true;
    },
    update: (state, action: PayloadAction<string>) => {
        if (action.payload.trim().length === 0) {
        
            return;
          }else{

              state.content=action.payload
          }
        
    },
  },
});

export const { update,addTodo, removeTodo,showhandler,showhandler2,edit,cancelhandler,donehandler } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectshow = (state: RootState) => state.todos.show;
export const selectshow2 = (state: RootState) => state.todos.show2;
export const selectcontent = (state: RootState) => state.todos.content;

export default store;