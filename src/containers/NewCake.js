import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../actions';

const NewCake = ({ qty, buyCake }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes: {qty}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>
        Buy {number} {parseInt(number) !== 1 ? 'Cakes' : 'Cake'}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { qty: state.cake.qty };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCake);
