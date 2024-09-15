import { ADD_TODO, DELETE_ALL_TODOS, DELETE_TODO, UPDATE_TODO } from "./actionTypes"

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const remuveTodo = (payload) => {
    return{
        type:DELETE_TODO,
        payload
    }
}

export const updateTodo = (payload)=>{
    return{
        type: UPDATE_TODO,
        payload
    }
}

export const deleteAllTodos = ()=>{
    return{
        type:DELETE_ALL_TODOS
    }
}


