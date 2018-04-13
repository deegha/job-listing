/**
 * Created by Deegha on 05/12/2018
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import thunkMiddleware from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"

import { rootReducer } from "./reducers/rootReducer"

import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'   

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer,undefined,  applyMiddleware(thunkMiddleware))
const persistor = persistStore(store)

ReactDOM.render(<Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>, document.getElementById('root'))

registerServiceWorker()
