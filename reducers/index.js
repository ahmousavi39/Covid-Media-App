import { combineReducers } from "redux"
import countryReducer from './countryChange';

const allReducers = combineReducers({
    countryGlobal : countryReducer
});

export default allReducers;