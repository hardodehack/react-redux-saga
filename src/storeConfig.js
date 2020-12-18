import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

function configureStoreProd(tFunction, initialState) {
    const sagaMiddleware = createSagaMiddleware({
        context: { tFunction }
    });
    const middlewares = [
        sagaMiddleware
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

function configureStoreDev(tFunction, initialState) {
    // Used for async
    const sagaMiddleware = createSagaMiddleware({
        context: { tFunction }
    });

    const middlewares = [
        sagaMiddleware
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    )
    );

    sagaMiddleware.run(rootSaga);
    window.store = store;
    return store;
}

const configureStore =  configureStoreProd;

export default configureStore;