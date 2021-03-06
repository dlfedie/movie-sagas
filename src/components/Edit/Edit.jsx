import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

//material ui
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

//styles for material
const styles = theme => ({
    //used for styling page
    chip: {
        margin: theme.spacing(1),
    },
    card: {
        maxWidth: 500,
        justifyContent: 'center',
        display: 'center'
        // aligncontent: center
    }

});


//component is basically the same as the details, but spits our title and description into 
//inputs; now TextFields from material.

class Edit extends Component {


    //this will help if page reloads. on reload, the textarea labels go wonky, but out of time.
    componentDidMount() {
        //if user types in /2, it'll load id 2, etc
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.props.match.params.id
        });

    }

    saveEdits = () => {
        console.log('clicked on Save button!', this.props.edit);
        //want to send edits to server/db
        this.props.dispatch({
            type: 'SAVE_EDIT',
            payload: this.props.edit
        })
        //also refresh details page with new edits - done in our Saga

        //then send to details page
        this.props.history.push(`/details/${this.props.match.params.id}`)


        //then snackbar! was going to try this on cancel, but out of time.
        this.props.dispatch({
            type: 'SNACKBAR_TRUE'
        });

    }

    //this is our event change listener for each text field: Title and Description
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

        const { classes } = this.props;

        //map over genres and display, same as details page
        let genres = this.props.edit.movie_genres.map((genre) => {
            return <Chip label={genre} className={classes.chip} color="primary" key={genre} />
        })

        return (

            <div>
                <Header />
                <ButtonGroup aria-label="full-width contained primary button group" className="buttons">
                    <Button onClick={() => { this.props.history.push(`/details/${this.props.match.params.id}`) }}
                        variant="contained"
                        color="secondary">
                        Cancel</Button>
                    <Button onClick={() => this.saveEdits()}
                        variant="contained"
                        color="primary">
                        Save</Button>
                </ButtonGroup>
                

                <div className="cardCenter">
                    <Card className={classes.card}>
                        <CardContent>
                            {genres}
                            <TextField
                                id="outlined-name"
                                label="Title"
                                className={classes.textField}
                                value={this.props.edit.title}
                                onChange={this.handleChangeFor('title')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows="10"
                                value={this.props.edit.description}
                                onChange={this.handleChangeFor('description')}
                                fullWidth
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            
                            
                        </CardContent>
                    </Card>
                </div>

                {/* this was original input/textarea content */}
                {/* <input value={this.props.edit.title} onChange={this.handleChangeFor('title')}></input> */}
                {/* <textarea rows="6" cols="75" value={this.props.edit.description} onChange={this.handleChangeFor('description')}></textarea> */}
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

export default connect(mapStateToProps)(withStyles(styles)(Edit));
