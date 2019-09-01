import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// styling for the Home page 
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 'auto',
        height: 'auto'
    }
});


class Home extends Component {
    //on component load, go get our movies from DB
    componentDidMount() {
        this.getMovies();
    }

    //separate the GET request so it can be recalled
    getMovies = () => {
        // console.log('getting movies');
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    clickedPoster = (id) => {
        //see if we can get movie id
        console.log('clicked poster', id);
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        });
        this.props.history.push(`/details/${id}`);
    }

    render() {

        //need to map over our array of movies so we can render them on the DOM
        let movieList = this.props.movies.map((movie) => {
            return (
                //this is a separate component, to make this smaller
                <GridListTile key={movie.id} cols={1} rows={1}>
                    <MovieItem movie={movie} clickedPoster={this.clickedPoster} key={movie.id} />
                </GridListTile>
            )
        })

        //for Material UI
        const { classes } = this.props;

        return (
            <div>
                <Header />
                <h1>Movie Collection</h1>
                {/* {JSON.stringify(this.props.movies)} */}
                {/* <ul className="movieList" >
                    {movieList}
                </ul> */}
                <div className={classes.root}>
                    <GridList
                        cols={3}
                        cellHeight={'auto'}
                        spacing={15}
                        className={classes.gridList}
                        
                        >
                        {movieList}
                    </GridList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        movies: reduxStore.movies
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Home));
