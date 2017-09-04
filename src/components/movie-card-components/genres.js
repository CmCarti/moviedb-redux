import React from 'react';
import { genre_names } from './genre_names';

export default function Genres(props) {
    
    const genre_ids = props.genres;
    // create the genre spans. If we're on the last item, drop the comma. 
    const genres = genre_ids.map((id, index) => index === genre_ids.length - 1 ? <span className="genre" key={id}>{ genre_names[id] }</span> :
            <span className="genre" key={id}>{ genre_names[id] }, </span>
    );
    return(
        <div className="right-align">
            <em>{ genres }</em>
        </div>
    )
};