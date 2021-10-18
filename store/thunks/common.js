import * as storeActions from '../actions/index';

export function setCountry(country){
    return (dispatch, getstate)=>{
        dispatch(storeActions.saveCountry(country));
    }
}