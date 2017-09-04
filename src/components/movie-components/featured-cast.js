import React from 'react';

export default ({cast}) => {
    const cast_cards = cast.map(member => {
        return(
        <div className="col s6 m4 l3 cast-member" key={member.name}>
            <div className="card small">
                <div className="card-image">
                    <img src={`https://image.tmdb.org/t/p/w138_and_h175_bestv2${member.profile_path}`} alt={member.name} />
                </div>
                <div className="card-content">
                    <h6>{member.name}</h6>
                    <p>{member.character}</p>
                </div>
            </div>
        </div>
        )
    });
    return (
        <div>
            { cast_cards }
        </div>
    )
}