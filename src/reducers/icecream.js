import { BUY_ICECREAM } from '../types';

const initialState = {
  qty: 20,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case BUY_ICECREAM:
      return {
        ...state,
        qty: state.qty - 1,
      };

    default:
      return state;
  }
};
