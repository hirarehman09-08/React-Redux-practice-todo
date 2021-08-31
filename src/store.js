import { createStore } from 'redux'
import rootReducer from './reducersCombining'

const store = createStore(rootReducer)

export default store
