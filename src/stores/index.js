import {applyMiddleware, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import * as reduxStorage from 'redux-storage'
import storage from 'redux-persist/lib/storage'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'
import {createBrowserHistory} from 'history'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  blackList: ['form']
}

const reducer = reduxStorage.reducer(rootReducer)

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

export const persistor = persistStore(store)

export const history = createBrowserHistory({
  basename: '/',
  hashType: 'noslash'
})
sagaMiddleware.run(rootSaga)
