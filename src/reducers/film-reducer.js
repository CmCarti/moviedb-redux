import { FETCH_MOVIE } from'../actions';


export default function(state = {}, action) {
    const data = action.payload;
    switch(action.type) {
        case FETCH_MOVIE:     
            console.log(data);     
            return { data: data.data }
        default:
            return state;
    }
}