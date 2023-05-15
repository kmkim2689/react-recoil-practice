import React from 'react'
import { todoListState } from './App'
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import {atom, selector, useRecoilValue} from 'recoil'

function TodoList() {

    const todoList = useRecoilValue(todoListState);
    
  return (
    <>
        <TodoItemCreator />
        {todoList.map((todoItem) => {
            <TodoItem key={todoItem.id} item={todoItem} />
        })}
    </>
  )
}

export default TodoList