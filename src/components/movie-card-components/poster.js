import React from 'react';

export default function(props) {
   return(
    <div className="card-image">
        <img 
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`} 
            alt="" />
    </div>
   );
}