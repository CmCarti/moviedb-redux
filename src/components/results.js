import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchDatabase } from '../actions';

import  MovieCard  from './movie-card';

class Results extends Component { 
    componentDidMount(){
        // Initial Load, grab the address bar and searchDatabase with it
        this.props.searchDatabase(this.props.match.params.term);
    } 
    componentDidUpdate(prevProps) {
        // If this address doesn't match the last address, run the searchDatabase function
        // with the new address
        if(this.props.match.params.term !== prevProps.match.params.term)
            this.props.searchDatabase(this.props.match.params.term);
        
    }
     renderResults() {
        if(this.props.results.data === undefined) return <div>Loading... </div>

        // Map over the results and return the card component for each film
        return this.props.results.data.map( film => <MovieCard key={film.id} film={film} />);        
    }
    render() {
        
        return(
            <div>
                   {this.renderResults()} 
            </div>
        )
    }
}

function mapStateToProps(state) {
     return { results: state.results };
}

export default connect(mapStateToProps, {searchDatabase})(Results);