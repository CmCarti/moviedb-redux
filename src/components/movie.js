import React, { Component } from 'react'

class Movie extends Component {
    render(){
        return(
            <div>
                { this.props.match.params.id }
            </div>
        )
    }
}

export default Movie;