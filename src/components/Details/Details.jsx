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


const styles = theme => ({
    //used for styling page
    chip: {
        margin: theme.spacing(1),
    },
    card: {
        maxWidth: 500,
        justifyContent: 'center',
        display: 'center',
        height: 'fill'
        // aligncontent: center
    }

});


class Details extends Component {


    componentDidMount() {
        //if user types in /2, it'll load id 2, etc
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.props.match.params.id
        });

    }



    render() {
        console.log('match id:', this.props.match.params.id);

        const { classes } = this.props;





        let genres = this.props.details.movie_genres.map((genre) => {
            return <Chip label={genre} className={classes.chip} color="primary" key={genre} />
        })

        return (
            <div>
                <Header />
                <ButtonGroup aria-label="full-width contained primary button group" className="buttons">
                    <Button onClick={() => { this.props.history.push('/') }}
                        variant="contained"
                        color="secondary">
                        Back to List</Button>
                    <Button onClick={() => this.props.history.push(`/edit/${this.props.match.params.id}`)}
                        variant="contained"
                        color="primary">
                        Edit</Button>
                </ButtonGroup>
                <div className="cardCenter">
                    <Card className={classes.card}>
                        <CardContent>
                            {/* image didn't work... didn't have time to figure out */}
                            {/* <img src={process.env.PUBLIC_URL + this.props.details.poster} alt="movie poster for this movie" /> */}
                            {/* {JSON.stringify(this.props.details.poster)} */}
                            <h1>{this.props.details.title}</h1>
                            {genres}
                            <p>{this.props.details.description}</p>
                        </CardContent>
                    </Card>
                </div>



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

export default connect(mapStateToProps)(withStyles(styles)(Details));
