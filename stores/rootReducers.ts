import { combineReducers } from 'redux';
import SmartMirrorReducer from './smartMirror/SmartMirrorReducer';

export default combineReducers({
  global: SmartMirrorReducer
});