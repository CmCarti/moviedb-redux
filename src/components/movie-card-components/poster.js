import React from 'react';

export default function(props) {
    const src = props.poster === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`;
    return(
    <div className="card-image">
        <img 
            src={ src } 
            alt="" />
    </div>
   );
}