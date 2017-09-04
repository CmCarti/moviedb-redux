import React from 'react';

import MovieGenres from './movie-genres';

export default ({film}) => {
    return(
        <div>
            <div className="row">
                <div className="col m6">
                    <h5>User Score: {film.vote_average}</h5>
                </div>
                <div className="col m6">
                    <h5>Genre: 
                        <MovieGenres genres={film.genres} />
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h5>Overview:</h5>
                    <p>{film.overview}</p>
                </div>
            </div>
        </div>
    )
}