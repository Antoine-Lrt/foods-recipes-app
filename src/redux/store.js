import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer} from 'redux-persist'


import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    recipeReducer: persistReducer(persistConfig, reducer)
})


const store = createStore(rootReducer, applyMiddleware(thunk))
const persistor = persistStore(store)


export  { store, persistor }