import { Store, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './rootReducer';

const store = (): Store<any> => {
    return createStore(
        reducer,
        applyMiddleware(logger)
    );
};

export default store;