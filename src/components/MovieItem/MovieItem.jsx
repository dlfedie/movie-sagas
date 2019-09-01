import React, { Component } from 'react';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    //used for styling page
    // card: {
    //     minWidth: 500,
    //     maxWidth: 500,
    //     justifyContent: 'center',
    //     display: 'center'
    //     // aligncontent: center
    // }

});


class MovieItem extends Component {
    render() {
        // const { classes } = this.props;

        return (
                <div key={this.props.movie.id} className="movieItem" >
                        <span className="moviePoster">
                            <img src={this.props.movie.poster} alt="movie poster for this movie" onClick={() => this.props.clickedPoster(this.props.movie.id)} />
                        </span>
                        <div className="movieTextDiv">
                            <h2 className="movieTitle">{this.props.movie.title}</h2>
                            {/* removed description from main page, as it looks gross. better on details */}
                            {/* <p className="movieDescription">{this.props.movie.description}</p> */}
                        </div>
                </div>
        );
    }
}


export default (withStyles(styles)(MovieItem));
