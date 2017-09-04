import React from 'react';

export default function ReleaseDate(props) {
    const date = props.date.split('-');    
    return(
       <span className="release-date"><i className="material-icons">date_range</i> { date[1] }/{date[2]}/{date[0]}</span>
    )
}