import { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducir';

const initialState = [{}];

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) ?? [];
}

export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
      }, [todos]);
      
    const addTodo = (task)=>{
        const action ={
            type: 'AddTodo',
            payload: task
        }
        dispatch(action);
    }

    const deleteTodo = (idTask)=>{
        const action =  {
            type: 'DeleteTodo',
            payload: idTask
        }
        dispatch(action);
    }

    const markDone = (idTask)=>{
        const action =  {
            type: 'UpdateDone',
            payload: idTask
        }
        dispatch(action);
    }


    return {
        pendingTodoCount: todos.filter( todo => !todo.done).length,
        todoCount: todos.length,
        todos,
        addTodo,
        deleteTodo,
        markDone,
    }
}
