import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './components/App'

import { DarkModeContext } from './components/context/DarkModeContext'
import { DarkModeProvider } from './components/context/DarkModeContext'
import { useContext } from 'react'

ReactDOM.render(
 <DarkModeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </DarkModeProvider>
  ,
  document.getElementById('root')
)
