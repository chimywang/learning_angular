import * as layout from './layout.actions';

export interface State {
  /*
   界面状态的描述符接口定义
   */
  openedModalName: string;
}

const initialState: State = {
    /*
     界面状态在这里进行值的初始化
     */
    openedModalName: null
  }
;

/*
 reducer 的主控函数，在状态改变的时候返回新的 state
 */
export function reducer(state = initialState, action: layout.LayoutActions): State {
  switch (action.type) {
    /*
     模态框的 case
     */
    case layout.LayoutActionTypes.OPEN_MODAL: {
      const name = action.payload;
      return Object.assign({}, state, {
        openedModalName: name
      }); // 此处用 Object.assign 的原因请探寻 redux 的状态更新原理
    }

    case layout.LayoutActionTypes.CLOSE_MODAL: {
      return Object.assign({}, state, {
        openedModalName: null
      })
    }

    default:
      return state;
  }
}
}
export const getOpenedModalName = (state: State) => state.openedModalName;
