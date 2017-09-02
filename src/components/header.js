import React, { Component } from 'react';
import SearchBar from './search-bar';
import { connect } from 'react-redux';
 

class Header extends Component {
    
    render(){
        return (
            <header className="card">
                <div className="container">
                    <SearchBar history={this.props.history} />
                </div>
               
            </header>
        )
    }
}

export default Header;