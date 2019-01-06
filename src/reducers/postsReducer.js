import types from '../actions/types';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
}

// export default (state = DEFAULT_STATE, action) => {
//     switch(action.type){
//         case types.FETCH_POSTS:
//         console.log("this is action:", action);
//             return { movie: action.quote};
//         default:
//             return state;
//     }
// };
