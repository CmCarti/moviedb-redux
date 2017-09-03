import React from 'react';
import Genres from './genres';
import ReleaseDate from './release-date';

export default function(props) {
   return(
        <div className="card-content">
            <div className="card-title">
                <div className="row">   
                    <div className="col m10">{ props.film.title }</div>
                    <div className="col m2 right-align card-rating">{ props.film.vote_average } <i className="material-icons">star</i></div>
                </div>
                
            </div>
            <div className="row">
                <div className="col m4 card-release">
                    <ReleaseDate date={ props.film.release_date } />
                </div>
                <div className="col m8">
                <Genres genres={ props.film.genre_ids } />
                </div>
            </div>
            <p className="card-overview"> {props.film.overview.replace(/^(.{200}[^\s]*).*/, "$1 ").replace(/,\s*$ | \s*$/, "...")} </p>
        </div>
   )
}