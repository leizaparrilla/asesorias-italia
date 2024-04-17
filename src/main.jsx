import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CounterApp from './CounterApp.jsx'
import ItemListContainer from './ItemListContainer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemListContainer />
    <App />
    <CounterApp value={0} />
  </React.StrictMode>,
)
