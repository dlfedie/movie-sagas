import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';


class Edit extends Component {


    saveEdits = () => {
        console.log('clicked on Save button!', this.props.edit);
        //want to send edits to server/db
        this.props.dispatch({
            type: 'SAVE_EDIT',
            payload: this.props.edit
        })
        //also refresh details page with new edits - done in our Saga

        //then send to details page
        this.props.history.push('/details')

    }

    handleChangeFor = (propertyName) => (event) => {
        console.log('event happened in:', propertyName);
        if (propertyName === 'title') {
            this.props.dispatch({
                type: 'CHANGE_EDIT_TITLE',
                payload: event.target.value 
            })
        } else if (propertyName === 'description') {
            this.props.dispatch({
                type: 'CHANGE_EDIT_DESCRIPTION',
                payload: event.target.value
        })
    }

    }

    render() {

        let genres = this.props.edit.movie_genres.map((genre) => {
            return <li key={genre}>{genre}</li>
        })

        return (

            <div>
                <Header />
                <button onClick={() => { this.props.history.push('/details') }}>Cancel</button>
                <button onClick={() => this.saveEdits()}>Save</button>
                <input value={this.props.edit.title} onChange={this.handleChangeFor('title')}></input>
                <textarea rows="6" cols="75" value={this.props.edit.description} onChange={this.handleChangeFor('description')}></textarea>
                <ul>
                    {genres}
                </ul>
                {/* {JSON.stringify(this.props.edit)} */}

            </div>

        );
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        edit: reduxStore.edit
    }
}

export default connect(mapStateToProps)(Edit);
