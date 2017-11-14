/*
  引入之前提到的用于创建高效选择器的工具 createSelector
 */
import { createSelector } from 'reselect';
/*
 同理引入 store-logger
 */
import { storeLogger } from 'ngrx-store-logger';
/*
 引入界面状态
 */
import * as fromLayout from './layout/layout.reducer';
import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
export interface AppState {
  layout: fromLayout.State;
}
export const reducers = {
  layout: fromLayout.reducer
};
const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);
export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}
/*
 创建界面状态的选择器
 */
export const getLayoutState = (state: AppState) => state.layout;
export const getLayoutOpenedModalName = createSelector(getLayoutState, fromLayout.getOpenedModalName);
