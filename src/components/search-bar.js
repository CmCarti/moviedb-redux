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
            <form onSubmit={ this.handleSubmit.bind(this) }>
             <i className="material-icons">search</i><input type="text" value={this.state.term} onChange={ event => this.handleChange(event.target.value) }/>
            </form>
        )
    }
    
}


export default SearchBar;