import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from '../actions';

const Icecream = () => {
  const qty = useSelector((state) => state.icecream.qty);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {qty}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
};

export default Icecream;
