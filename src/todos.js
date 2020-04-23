import React from 'react';

export default function Todos({todos,deletetodo}) {
    const todolist=todos.length? (todos.map(todo=>{
    return(<li key={todo.id} className="collection-item" onClick={()=>deletetodo(todo.id)}>{todo.do}</li>)
    })) : (<h4 className="collection-item center">Empty</h4>) ;

    return (
        <ol className="todos collection">
           {todolist}
        </ol>
    )
}

