import { createReducer } from 'redux-immutablejs';
import { types } from '../actions';

export const items = createReducer([], {
  [types.ITEM_ADD]: (state, action) => (
    state.push({
      id: action.payload.id,
      text: action.payload.text
    })
  ),
  [types.ITEM_DELETE]: (state, action) => (
    state.filter(entry => entry.id !== action.payload.id)
  )
});

export const counter = createReducer({value: 99}, {
  [types.COUNTER_INC]: (state) =>
    state.update('value', value => value + 1),
  [types.COUNTER_DEC]: (state) =>
    state.update('value', value => value - 1),
  [types.COUNTER_RST]: (state) =>
    state.set('value', 0)
});
