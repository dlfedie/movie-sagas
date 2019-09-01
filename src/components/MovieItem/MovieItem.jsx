import React, { Component } from 'react';


class MovieItem extends Component {
    render() {
        

        return (
            <div key={this.props.movie.id} className="movieItem">
                <span className="moviePoster">
                    <img src={this.props.movie.poster} alt="movie poster for this movie" onClick={() => this.props.clickedPoster(this.props.movie.id)} />
                </span>
                <div className="movieTextDiv">
                    <h2 className="movieTitle">{this.props.movie.title}</h2>
                    <p className="movieDescription">{this.props.movie.description}</p>
                </div>
            </div>
        );
    }
}


export default MovieItem;
