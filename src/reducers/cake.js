import { BUY_CAKE } from '../types';

const initialState = {
  qty: 10,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_CAKE:
      return {
        ...state,
        qty: state.qty - payload,
      };

    default:
      return state;
  }
};
