import { BUY_ICECREAM } from '../types';

const initialState = {
  qty: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        qty: state.qty - 1,
      };

    default:
      return state;
  }
};

export default icecreamReducer;
