import { combineReducers } from 'redux';
import cakeReducer from './cake';
import icecreamReducer from './icecream';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
