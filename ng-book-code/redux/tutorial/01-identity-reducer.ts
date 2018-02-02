interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer0: Reducer<number> = (state: number, action: Action) => {
  return state;
};

console.log( reducer0(0, null) ); // -> 0
