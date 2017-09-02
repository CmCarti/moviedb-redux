import React from 'react';
import SearchBar from './search-bar';
 

export default function Header(props) {    
        return (
            <header className="card">
                <div className="container">
                    <SearchBar history={props.history} />
                </div>               
            </header>
        )    
}
