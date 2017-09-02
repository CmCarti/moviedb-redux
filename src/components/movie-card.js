import React, { Component } from 'react';

export default class MovieCard extends Component {
    render() {
        return (
            <div className="card">
                {this.props.film.title}
            </div>
        )
    }
}