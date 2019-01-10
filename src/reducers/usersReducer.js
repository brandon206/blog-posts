import types from '../actions/types';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case types.FETCH_USER:
            return [ ...state, action.payload];
        default:
            return state;
    }
}