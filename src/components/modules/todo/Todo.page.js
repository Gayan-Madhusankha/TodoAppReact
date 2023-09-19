import { useContext,useState,useEffect, Fragment } from 'react'

import { TodoContext } from '../../global-context/context-providers/TodoContext.provider';
import { AddItem } from './includes/AddItem';
import { ListTodos } from './includes/ListTodos';

const TodoPage=()=>{
    const [state,todoAction] = useContext(TodoContext);

    useEffect(()=>{
      todoAction.requestData();
    },[state.refreshStatus]);

    return (
      <div className="todo-list-wrapper">
        <h1 style={{textAlign:'center', margin: '0'}}>Todo Item List</h1>
        <br/>
        <AddItem/>
        <br/>
        <ListTodos />
      </div>
    )
}

export {
    TodoPage
}