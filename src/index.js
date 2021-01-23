import './styles.css'
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { decrement, increment, asyncIncrement, changeTheme } from './redux/action';
import thunk from 'redux-thunk';


const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, applyMiddleware(thunk));

function render() {
    counter.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;
});

store.dispatch({
    type: 'INIT_APP'
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    store.dispatch(changeTheme(newTheme));
});
