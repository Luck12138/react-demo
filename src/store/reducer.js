import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../header/store/index";
import { reducer as homeReducer }  from '../pages/home/store/';

export default combineReducers({
  header: headerReducer,
  home: homeReducer
})