
import { productReducer } from '@/reducers/Product';
import { combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
    products: productReducer
})

const store = createStore(rootReducer);

export default store;