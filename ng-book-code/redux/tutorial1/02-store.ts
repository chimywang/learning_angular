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


class Store<T> {
    private _state: T;

    constructor(private reducer: Reducer<T>, initialState: T) {
        this._state = initialState;
    }

    /**
     * 返回当前 state
     * @returns {T}
     */
    getState(): T {
        return this._state;
    }

    /**
     * 触发reducer方法，参数为action
     * 改变当前state
     * 没有返回值
     * @param {Action} action
     */
    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
    }
}

/**
 * 定义一个  reducer
 * @param {number} state
 * @param {Action} action
 * @returns {any}
 */
let reducer: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
};

// 实例化一个Store,
let store = new Store<number>(reducer, 0);

console.log(store.getState()); // => 0

store.dispatch({type: 'INCREMENT'});
console.log(store.getState()); // => 1

store.dispatch({type: 'INCREMENT'});
console.log(store.getState()); // => 2

store.dispatch({type: 'DECREMENT'});
console.log(store.getState()); // => 1