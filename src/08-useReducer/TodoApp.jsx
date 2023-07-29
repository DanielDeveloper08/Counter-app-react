import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducir"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {
    
    const { todos, todoCount, pendingTodoCount,addTodo, deleteTodo, markDone} = useTodo();

  return (
    <>
    <h1>TodoApp: {todoCount}, <small>Pendiente: {pendingTodoCount}</small></h1>

    <hr />

    <div className="row">
        <div className="col-7">
            {
                todos.map( todo => 
                    <TodoList key={todo.id} todo={todo}  deleteTodo={ deleteTodo }  markDone={ markDone }/>
                )
            }
        </div>
        <div className="col-5">
            <h4>Agregar TO DO</h4>
            <hr />
            <TodoAdd onNewTodo={ addTodo }/>
        </div>
    </div>
    </>
  )
}
