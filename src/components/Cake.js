import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../actions';

const Cake = ({ qty, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes: {qty}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { qty: state.cake.qty };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
