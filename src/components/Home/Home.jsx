import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';



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
        this.props.history.push('/details');
    }

    render() {

        //need to map over our array of movies so we can render them on the DOM
        let movieList = this.props.movies.map((movie) => {
            return (
                //this is a separate component, to make this smaller
                <MovieItem movie={movie} clickedPoster={this.clickedPoster} key={movie.id} />
            )
        })

        return (
            <div>
                <Header />
                <h1>Movie Collection</h1>
                {/* {JSON.stringify(this.props.movies)} */}
                <ul className="movieList" >
                    {movieList}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        movies: reduxStore.movies
    }
}

export default connect(mapStateToProps)(Home);
