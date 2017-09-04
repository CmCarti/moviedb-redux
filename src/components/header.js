import React from 'react';

import SearchBar from './search-bar';

import logo from '../logo.png';

export default function Header(props) {    
        return (
            <header>
                <div className="container">
                    <div className="row">
                    <div className="col m12 s12 right-align">
                            <a href="" className="movie-db">
                                <span >Powered By</span> <img src={ logo } alt="" className="responsive-img logo"/>
                            </a>
                        </div>
                        <div className="col m12 s12">
                        <SearchBar history={props.history} />
                        </div>
                        
                    </div>
                </div>               
            </header>
        )    
}
