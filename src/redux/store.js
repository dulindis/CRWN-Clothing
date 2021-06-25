import {
    createStore,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';


const midddlewares =[thunk];

if (process.env.NODE_ENV ==='development') {
    midddlewares.push(logger);
}
 
export const store = createStore(rootReducer,applyMiddleware(...midddlewares));
export const persistor = persistStore(store);

export default {store, persistor}