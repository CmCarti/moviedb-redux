import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import './index.css';
import Header from './components/header';
import MovieIndex from './components/movie-index';
import Results from './components/results';
import Movie from './components/movie';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Header} />               
                <div className="container">
                    <Switch >
                        <Route path="/search/:term" component={ Results }/>
                        <Route path="/movies/:id" component={ Movie } />
                        <Route path="/" component={ MovieIndex } />
                    </Switch>
                </div>
                <footer></footer>
            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
