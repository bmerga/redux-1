import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore } from 'redux'
import rootReducer from './reducer.jsx'
import { Provider } from 'react-redux'

const store = legacy_createStore(rootReducer)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
