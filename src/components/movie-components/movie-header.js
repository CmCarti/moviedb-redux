import React from 'react';

import MoviePoster from './movie-poster';
import MovieDetails from './movie-details';
import Crew from './crew';

export default ({film}) => {
    
    const backdrop= `linear-gradient(rgba(55,111,137, .25), rgba(55,111,137, .9)),url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${film.backdrop_path})`
    const background = {
        'backgroundImage': backdrop,
        'backgroundSize': 'cover'
    }
    return (
        <div style={ background }>
            <div className="container movie-header">
                <div className="row">
                    <div className="col s10">
                        <h4>{film.title} <small>({film.release_date.substring(0,4)})</small></h4> 
                        <h5><em>"{film.tagline}"</em></h5>
                        <MovieDetails film={ film } /> 
                    </div>
                    <div className="col s2">
                        <MoviePoster poster={ film.poster_path }/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Crew crew={film.credits.crew}/>
                    </div>
                </div>
            </div>    
        </div>
    )
}