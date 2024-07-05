import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Global.module.css"
import  UserProvider  from './Controllers/UserProvider.jsx'
-
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)
