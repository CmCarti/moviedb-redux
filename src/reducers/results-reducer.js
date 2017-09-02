import { FETCH_POPULAR, SEARCH } from'../actions';


export default function(state = {}, action) {
    const data = action.payload;
    switch(action.type) {
        case FETCH_POPULAR:  
            console.log(action.payload);          
            return { data: data.data.results }
        case SEARCH:
            console.log(action.payload);
            return { data: data.data.results }
        default:
            return state;
    }
}