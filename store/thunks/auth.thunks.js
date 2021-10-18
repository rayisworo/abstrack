import * as storeActions from '../actions/index';
import _ from 'lodash';

export function register(data){
    return (dispatch, getstate)=>{
        const state = getstate();
        const form = _.result(state,'form',{});
        console.log(form);
    }
}