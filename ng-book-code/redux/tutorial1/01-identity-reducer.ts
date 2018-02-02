/**
 * Action 有两个参数，一个是type,必选，通常为string类型；另一个是payload,非必选
 */

interface Action {
    type: string;
    payload?: any;
}

/**
 * reducer是一个纯函数；有两个参数，一个是state,一个是action;返回一个泛型类型
 * 通常，state是系统state，action是一个Action操作对象
 */
interface Reducer<T> {
    (state: T, action: Action): T;
}

/**
 * 实例化一个reducer,
 * state 为数字类型，
 * 返回state
 * @param {number} state
 * @param {Action} action
 * @returns {number}
 */
let reducer0: Reducer<number> = (state: number, action: Action) => {
    return state;
};
// 调用 reducer
console.log(reducer0(0, null)); // => 0
/**
 * 根据action.type 执行不同的响应
 * @param {number} state
 * @param {Action} action
 * @returns {number}
 */
let reducer1: Reducer<number> = (state: number, action: Action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    if (action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
};

let incrementAction: Action = {type: 'INCREMENT'};
let decrementAction: Action = {type: 'DECREMENT'};

console.log(reducer1(100, incrementAction)); // => 101
console.log(reducer1(100, decrementAction)); // => 99


/**
 * 根据action.type 执行不同的响应
 * @param {number} state
 * @param {Action} action
 * @returns {number}
 */
let reducer2: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default :
            return state;
    }
};
console.log(reducer2(100, incrementAction)); // => 101
console.log(reducer2(100, decrementAction)); // => 99


let reducer3: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default :
            return state;
    }
};
console.log(reducer3(100, {type: 'PLUS', payload: 7})); // => 107
console.log(reducer3(100, {type: 'PLUS', payload: 9000})); // => 9100
console.log(reducer3(100, {type: 'PLUS', payload: -2})); // => 98