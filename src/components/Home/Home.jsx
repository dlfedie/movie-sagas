import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';



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

    render() {

        //need to map over our array of movies so we can render them on the DOM
        let movieList = this.props.movies.map((movie, index) => {
            return (

                <div key={index} className="movieItem">
                    <span className="moviePoster">
                        <img src={movie.poster} alt="movie poster for this movie" />
                    </span>
                    <div className="movieTextDiv">
                        <h2 className="movieTitle">{movie.title}</h2>
                        <p className="movieDescription">{movie.description}</p>
                    </div>

                </div>
            )
        })

        return (
            <div>
                <Header />
                <h1>Home</h1>
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
