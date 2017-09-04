import React from 'react';

export default ({genres}) => {
    const genre_list = genres.map((genre) => <span key={genre.id} className="card genre-card">{genre.name}</span>)
    
    return(
        <span>
            { genre_list }
        </span>
    )
}