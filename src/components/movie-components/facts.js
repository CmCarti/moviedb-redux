import React from 'react';
import ReleaseDate from '../movie-card-components/release-date';

export default ({film}) => {
    return(
        <div>
            <h5>Status</h5>
            <p>{ film.status }</p>
            <h5>Release Date</h5>
            <p><ReleaseDate date={film.release_date} /></p>
        </div>
    )
}