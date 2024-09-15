import { ADD_TODO, DELETE_ALL_TODOS, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

const initialValue = [];

export const todoReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_TODO:
            return state.filter((el) => el.id !== action.payload);

        case UPDATE_TODO:
            return state.map((el) =>
                el.id === action.payload.id ? { ...el, todo: action.payload.todo } : el
            );
        case DELETE_ALL_TODOS:
            return [];

        default:
            return state;
    }
};
