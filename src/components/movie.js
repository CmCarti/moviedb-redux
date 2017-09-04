import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

// Load the components for the movie page
import MovieHeader from './movie-components/movie-header';
import MovieBody from './movie-components/movie-body';

class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        // If this address doesn't match the last address, run the fetchMovie function
        // with the new address
        if(this.props.match.params.id !== prevProps.match.params.id)
            this.props.fetchMovie(this.props.match.params.id);
        
    }
    
    render(){
        
        if(this.props.activeFilm.data === undefined)
            return <div>Loading</div>
        
        const film = this.props.activeFilm.data;
        console.log(film)        
        return(
            <div>
                <MovieHeader film={film} />
                <MovieBody film={film} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeFilm: state.activeFilm
    };
}

export default connect(mapStateToProps, {fetchMovie})(Movie);