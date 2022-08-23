import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer} from 'redux-persist'


import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favorites']
}

const rootReducer = combineReducers({
    recipeReducer: persistReducer(persistConfig, reducer)
})


const store = createStore(rootReducer, applyMiddleware(thunk))
const appPersist = persistStore(store)

export { store, appPersist }