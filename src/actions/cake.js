import { BUY_CAKE } from '../types';

const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export { buyCake };
