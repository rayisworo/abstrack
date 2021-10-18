import { SAVE_COUNTRY, CLEAR_COUNTRY } from "../actions";

export default function Country(state={}, action){
    switch (action.type) {
        case SAVE_COUNTRY:
            return action.data;
        case CLEAR_COUNTRY:
            return {};
        default:
            return state;
    }
}