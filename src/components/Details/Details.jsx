import React, { Component } from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';


class Details extends Component {
    render() {
        let genres = this.props.details.movie_genres.map((genre) => {
            return <li key={genre}>{genre}</li>
        })

        return (
            <div>
                <Header />
                <button onClick={()=> {this.props.history.push('/')}}>Back</button>
                <button>Edit</button>
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
