import React, { useState } from 'react'
import { todoListState } from './App';
import { useSetRecoilState } from 'recoil';

function TodoItemCreator() {

    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ]);
        setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    }

  return (
    <div>
        <input type='text' value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator

let id = 0;
function getId() {
    return id++;
}