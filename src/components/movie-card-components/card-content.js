import React from 'react';
import Genres from './genres';

export default function(props) {
   return(
        <div className="card-content">
            <span className="card-title">{ props.film.title }</span>
            <Genres genres={ props.film.genre_ids } />
        </div>
   )
}