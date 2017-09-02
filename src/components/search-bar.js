import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term:''};
    }

    handleSubmit(e) {
        e.preventDefault();        
        // Navigate to /search/term and clear the term from the bar
        this.props.history.push(`/search/${this.state.term}`);
        this.setState({term: ''});
    }
    handleChange(term) {
        this.setState({term})
    }
    render() {
        return (
            <form className="row"onSubmit={ this.handleSubmit.bind(this) }>
                <div className="input-field col l10 m9 s8">
                    <input type="text" id="search" className=""  value={this.state.term} onChange={ event => this.handleChange(event.target.value) }/>
                    <label htmlFor="search"><i className="material-icons search-icon">search</i> Enter a movie title</label>
                </div>
                <br/>
                <button className="btn waves-effect waves-light col l2 m3 s4" type="submit" name="action">Search
                        
                </button>
            </form>
        )
    }
    
}


export default SearchBar;