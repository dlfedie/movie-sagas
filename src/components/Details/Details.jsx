import React, { Component } from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';


class Details extends Component {

    state ={
        initialMatchID: this.props.match.params.id
    }

    componentDidMount() {
        //if user types in /2, it'll load id 2, etc
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.props.match.params.id
        });

    }



    render() {
        console.log('match id:', this.props.match.params.id);
        

        
        

        let genres = this.props.details.movie_genres.map((genre) => {
            return <li key={genre}>{genre}</li>
        })

        return (
            <div>
                <Header />
                <button onClick={()=> {this.props.history.push('/')}}>Back</button>
                <button onClick={()=> this.props.history.push('/edit')}>Edit</button>
                <h1>{this.props.details.title}</h1>
                <p>{this.props.details.description}</p>
                <ul>
                    {genres}
                </ul>
                {/* {JSON.stringify(this.props.details)} */}

            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        details: reduxStore.details
    }
}

export default connect(mapStateToProps)(Details);
