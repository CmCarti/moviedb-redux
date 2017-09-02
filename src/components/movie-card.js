import React, { Component } from 'react';

import Poster from './movie-card-components/poster';
import CardContent from './movie-card-components/card-content';
import CardAction from './movie-card-components/card-action';
export default class MovieCard extends Component {


    render() {
        console.log(this.props.film);
        const film = this.props.film;
        return (
                <div className="card horizontal">
                    <Poster poster={ film.poster_path } />
                    <div className="card-stacked">
                        <CardContent film={ film } />
                        <CardAction id={ film.id } />
                    </div>
                </div>
        )
    }
}