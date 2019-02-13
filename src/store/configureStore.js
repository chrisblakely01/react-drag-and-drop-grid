import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import reducers from '../reducers';

const middlewares = [];

middlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(reducers, initialState(), composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;
