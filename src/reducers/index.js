import { combineReducers } from 'redux';
import cake from './cake';
import icecream from './icecream';
import user from './user';

export default combineReducers({ cake, icecream, user });
