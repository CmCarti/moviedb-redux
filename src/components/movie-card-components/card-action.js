import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
   return(
        <div className="card-action right-align">
            <Link to={ `/movies/${props.id}` }  >
                Read More
            </Link>
        </div>
   )
}