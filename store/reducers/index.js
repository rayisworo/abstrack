import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import country from './country.reducer';

const reducers = {
    form:formReducer,
    country:country,
}

const combinedReducers = combineReducers(reducers);

export default combinedReducers;