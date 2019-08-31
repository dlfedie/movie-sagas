import React, { Component } from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';


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
        return (
            <div>
                <Header />
                <h2>Home</h2>
              
                
            </div>
        );
    }
}

export default connect()(Home);
