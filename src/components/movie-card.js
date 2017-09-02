import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {


    render() {
        console.log(this.props.film);
        return (
            <Link to={`/movies/${this.props.film.id}`}>
                <div className="card">
                    {this.props.film.title}
                </div>
            </Link>
        )
    }
}