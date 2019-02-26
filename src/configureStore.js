import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import careerApp from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const storeEnhancers = [middlewareEnhancer]
const composedEnhancer = composeWithDevTools(...storeEnhancers)

const store = createStore(careerApp, composedEnhancer)

sagaMiddleware.run(rootSaga)

export default function configureStore() {
  return store
}
