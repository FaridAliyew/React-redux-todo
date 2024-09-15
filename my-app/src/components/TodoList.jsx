import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAllTodos, remuveTodo, updateTodo } from '../redux/action';
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

function TodoList() {
    const [todoInput, setTodoInput] = useState("");

    // Redaktə modunu idarə etmək üçün state
    const [isEditing, setIsEditing] = useState(false);

    // Hansi todo-nu redaktə etdiyimizi yadda saxlamaq üçün state (id - isini)
    const [editId, setEditId] = useState(null);

    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoInput !== "" && todoInput !== null) {
            if (isEditing) {
                dispatch(updateTodo({ id: editId, todo: todoInput }));
                setIsEditing(false); // Redaktə modunu söndürürük
            } else {
                // Yeni todo əlavə etmək
                const date = new Date();
                const time = date.getTime();
                let todoObj = {
                    id: time,
                    todo: todoInput
                };
                dispatch(addTodo(todoObj));
            }
            setTodoInput("");
        }
    };

    const handleEdit = (todo) => {
        // Redaktə modunu açiram
        setIsEditing(true);
        // Redaktə edilən todo-nun id-sini təyin edirem
        setEditId(todo.id);
        // Mövcud todo-nu input sahəsinə doldururuq
        setTodoInput(todo.todo);
    };



    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                />
                <button type='submit'>{isEditing ? 'Update' : 'Add'}</button>
            </form>

    
            <p>Total Todos: {todos.length}</p>

            {todos.map((el) => (
                <p key={el.id}>
                    <span className="text">{el.todo}</span>
                    <span className="actions">
                        <RiDeleteBin5Line className="icon" onClick={() => dispatch(remuveTodo(el.id))} />
                        <MdOutlineModeEdit className="icon" onClick={() => handleEdit(el)} />
                    </span>
                </p>
            ))}

            <button className='all-deleted' onClick={() => dispatch(deleteAllTodos())}>All Deleted Todo</button>
        </div>
    );
}

export default TodoList;
