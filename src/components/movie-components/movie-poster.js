import React from 'react';

export default (props) => {
    const src = props.poster === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`;
    return(
        <img src={src} className="responsive-image card" alt="Movie Poster" />
    )
}