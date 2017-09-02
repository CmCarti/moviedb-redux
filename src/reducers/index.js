import { combineReducers } from 'redux';

import resultsReducer from './results-reducer';
import filmReducer from './film-reducer';

const rootReducer = combineReducers({
    results: resultsReducer,
    activeFilm: filmReducer
});

export default rootReducer;