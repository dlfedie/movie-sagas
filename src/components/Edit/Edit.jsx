import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';


class Edit extends Component {

    saveEdits = () => {
        console.log('clicked on Save button!');

    }

    render() {

        let genres = this.props.details.movie_genres.map((genre) => {
            return <li key={genre}>{genre}</li>
        })

        return (

            <div>
                <Header />
                <button onClick={() => { this.props.history.push('/details') }}>Cancel</button>
                <button onClick={() => this.saveEdits}>Save</button>
                <input value={this.props.details.title}></input>
                <textarea rows="6" cols="75" value={this.props.details.description}></textarea>
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

export default connect(mapStateToProps)(Edit);
