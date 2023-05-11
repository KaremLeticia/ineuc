import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import GlobalStyles from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Router />
  </React.StrictMode>,
)
