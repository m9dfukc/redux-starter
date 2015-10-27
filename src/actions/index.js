import { createConstants } from '../utils/index'
import uniqueId from 'lodash/utility/uniqueid';

export const types = createConstants(
  'COUNTER_INC',
  'COUNTER_DEC',
  'COUNTER_RST',
  'ITEM_ADD',
  'ITEM_DELETE'
);

export const increment = () => ({
  type: types.COUNTER_INC
});

export const decrement = () => ({
  type: types.COUNTER_DEC
});

export const reset = () => ({
  type: types.COUNTER_RST
});

export const addItem = (text) => ({
  type: types.ITEM_ADD,
  payload: {
    id: uniqueId(),
    text
  }
});

export const remove = (id) => ({
  type: types.ITEM_ADD,
  payload: {
    id
  }
});
