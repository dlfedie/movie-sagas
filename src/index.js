import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//axios. that's real acid so i want to see sagas, people!
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('GET_DETAILS', getDetails);
}

//Sagas!
function* fetchMovies(action) {
    try {
        let fetchResponse = yield axios.get('/api/movies')
        console.log('getting fetchresponse of:', fetchResponse);
        yield put({
            type: 'SET_MOVIES',
            payload: fetchResponse.data
        })
    } catch (err) {
        console.log('error in fetchMovies GET:', err);
    }
}

function* getDetails(action) {
    try {
        yield console.log('in getDetails', action.payload);
        //go to the specific route GET request, where we'll do some sql querying to get the data needed
        let getDetailsResponse = yield axios.get(`/api/movies/${action.payload}`)
        yield put({
            type: 'SET_DETAILS',
            payload: getDetailsResponse
        })
        yield console.log('sent details to reducer');
        //also want to send details to edit page
        yield put({
            type: 'SET_EDIT',
            payload: getDetailsResponse
        })


        
    } catch (err) {
        console.log('error in getDetails GET', err);
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//have to set state with array object pre-defined inside.
const details = (state = {movie_genres: []}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload.data;
        default:
            return state;
    }
}

//create an edit store that is separate from the details data, in case we cancel. state is same as details, basically
const edit = (state = { movie_genres: [] }, action) => {
    switch (action.type) {
        case 'SET_EDIT':
            return action.payload.data;
        case 'CHANGE_EDIT_TITLE':
            console.log('in our edit reducer-title, here is what it gets:', action.payload);
            return {...state, title: action.payload}
        case 'CHANGE_EDIT_DESCRIPTION':
            console.log('in our edit reducer-description, here is what it gets:', action.payload);
            return {...state, description: action.payload}
           
        default:
            return state;
    }
}


//unsure why this is here; will comment out for now
// Used to store the movie genres
// const genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GENRES':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        edit,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
