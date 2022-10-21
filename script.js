
//select DOM element.....................................
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement')

// initial state..........................................
const initialState = {
    value: 0,
};

// create reducer function.................................
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }

};

//create store............
const store = Redux.createStore(counterReducer);

const render = () => {
    const newState = store.getState();
    counterEl.innerText = newState.value.toString();

};
//update UI initially.......................
render() // *** UI এ প্রাথমিক state = 0 সেটি দেখাবে

store.subscribe(render);

// Butun click listener(type & payload)......................

incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment',
        payload: 5
    })
});

decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
        payload: 2
    })
});

