import * as redux from "redux";
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./ActionType";
const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case COUNTER_DECREMENT: {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};
const store = redux.createStore(reducer);

store.getState();

export default store;
