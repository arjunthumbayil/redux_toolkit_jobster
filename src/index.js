import React from 'react'
import 'normalize.css'
import './index.css'
import App from './App'
// import ReactDOM from 'react-dom'

import { createRoot } from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
