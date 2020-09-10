import { BUY_CAKE } from '../types';

const initialState = {
  qty: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        qty: state.qty - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
