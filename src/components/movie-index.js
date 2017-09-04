import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular, clearMovie } from '../actions';

import MovieCard from './movie-card';

class MovieIndex extends Component {
    componentDidMount() {
        // Once the component has mounted fire the fetchPopular Action
        this.props.fetchPopular();

    }
    
    renderPopular() {
        // Ajax Spinner for loading
        if(this.props.results.data === undefined) return <div>Loading... </div>
        // Map over the popular movies and return the card component for
        // each film
        return this.props.results.data.map( film => <MovieCard key={film.id} film={film} />);        
    }

    render() {
        return(
            <div className="container">
                <h4>Popular Movies</h4>
                { this.renderPopular() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { results: state.results }
}

export default connect(mapStateToProps, {fetchPopular, clearMovie})(MovieIndex);