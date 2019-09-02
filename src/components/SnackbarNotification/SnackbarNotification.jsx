import React, { Component } from 'react';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';


//this is a component to handle snackbars

class SnackbarNotification extends Component {

    //snackbars

    //this is for other components to use. not needed here, but this will help for copy/paste
    handleSuccess = () => {
        this.props.dispatch({
            type: 'SNACKBAR_TRUE'
        });
    }


    //this is needed here to close the snackbar
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.dispatch({
            type: 'SNACKBAR_FALSE'
        });
    }

    render() {
        
        return (
            <Snackbar
                className="success"
                variant="success"

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
            >
                <SnackbarContent className="success" message="Changes saved!"
                    variant="success" onClose={this.handleClose} action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                    style={{ backgroundColor: '#4caf50' }}
                />
            </Snackbar>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        open: reduxStore.snackbarOpen
    }
}

export default connect(mapStateToProps)(SnackbarNotification);
