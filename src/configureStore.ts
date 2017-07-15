import { Store, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './rootReducer';
import thunk from "redux-thunk";

const store = (): Store<any> => {
    return createStore(
        reducer,
        applyMiddleware(
            logger,
            thunk
        )
    );
};

export default store;