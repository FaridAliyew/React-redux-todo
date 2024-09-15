import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducer';
import { loadState, saveState } from './localStorage';

// LocalStorage-dan state-i yuklemek
const persistedState = loadState();

const store = configureStore({
    reducer: todoReducer,
    preloadedState: persistedState 
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
