import React from 'react';


export default function Genres(props) {
    console.log(props.genres);
    const genre_ids = props.genres;
    // It would be better to use an API call
    // to get the list of genres from TMDB, but
    // I feel as if I'm using too many API calls as it is. 
    //This doesn't feel important enough to stress the server for. 
    const genre_names = {
        28:     'Action',
        12:     'Adventure',
        16:     'Animation',
        35:     'Comedy',
        80:     'Crime',
        99:     'Documentary',
        18:     'Drama',
        10751:  'Family',
        14:     'Fantasy',
        36:     'History',
        27:     'Horror',
        10402:  'Music',
        9648:   'Mystery',
        10749:  'Romance',
        878:    'Science Fiction',
        10770:  'TV Movie',
        53:     'Thriller',
        10752:  'War',
        37:     'Western'
    }

    // create the genre spans. If we're on the last item, drop the comma. 
    const genres = genre_ids.map((id, index) => index === genre_ids.length - 1 ? <span className="genre">{ genre_names[id] }</span> :
            <span className="genre">{ genre_names[id] }, </span>
    );
    return(
        <div className="right-align">
            { genres }
        </div>
    )
};