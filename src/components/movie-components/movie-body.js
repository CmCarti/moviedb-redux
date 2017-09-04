import React from 'react';

import FeaturedCast from './featured-cast';
import Facts from './facts';

export default ({film}) => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col s12 m8">
                    <h5>Featured Cast</h5>
                    <div className="row">
                        <FeaturedCast cast={ film.credits.cast.splice(0, 6)}/>
                    </div>
                    <h5>Trailer</h5>
                    <div className="row">
                        <div className="col s12">
                            <div className="video-container">
                            
                                <iframe src={`//www.youtube.com/embed/${film.videos.results[0].key}`} frameBorder="0" title="Trailer"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <h5>Facts</h5>
                    <Facts film={film} />
                </div>
            </div>
        </div>
    )
}