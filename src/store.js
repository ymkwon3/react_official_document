import {createStore, combineReducers} from 'redux'

const 체중 = 100;

const reducerOne = (state=체중, action) => {
    if(action.type === '증가') {
        state++;
        return state;
    } else if (action.type === '감소') {
        state--;
        return state;
    } else {
        return state;
    }
}

const reducerTwo = (state=체중, action) => {
    if(action.type === '증가') {
        state++;
        return state;
    } else if (action.type === '감소') {
        state--;
        return state;
    } else {
        return state;
    }
}

const rootReducer = combineReducers({
    reducerOne, reducerTwo
})

const store = createStore(rootReducer);

export default store;