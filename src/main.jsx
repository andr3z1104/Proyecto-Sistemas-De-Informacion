import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Global.module.css"
import  UserProvider from './Controllers/UserProvider.jsx'
import  MenuProvider from './Context/MenuContext.jsx'
-
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      < MenuProvider>
        <App />
      </MenuProvider>
    </UserProvider>
  </React.StrictMode>,
)
