import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './search-bar';

import logo from '../logo.png';

export default function Header(props) {    
        return (
            <header className="card">
                <div className="container">
                    <div className="row">
                        <div className="col m2 s12 center-align">
                            <Link to="/">
                                <img src={ logo } alt="" className="responsive-img"/>
                            </Link>
                        </div>
                        <div className="col m10 s12">
                        <SearchBar history={props.history} />
                        </div>
                    </div>
                </div>               
            </header>
        )    
}
