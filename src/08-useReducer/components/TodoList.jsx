import React from 'react'

export const TodoList = ({todo, deleteTodo, markDone}) => {
    return (
        <>
            <ul className="list-group mt-2">
                <li className="list-group-item d-flex justify-content-between">
                    <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}  onClick={ ()=> markDone(todo.id) }>{todo.description}</span>
                    <button className="btn btn-danger" onClick={ ()=> deleteTodo(todo.id) }>Borrar</button>
                </li>
            </ul>
        </>
    )
}
