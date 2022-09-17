/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

import { DarkModeProvider } from './context/DarkModeContext'
import { DarkModeContext } from './context/DarkModeContext'
import { useContext } from 'react'

import About from './About'
import Home from './Home'
import Nav from './Nav'

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div
    className={darkMode ? `home-dark` : `home-light`}
    css={css`
      box-sizing: border-box;
      color: #34374c;
      min-height: 100%;
      padding: 40px 80px;
      transition: background 0.2s ease-out, color 0.2s ease-out;
      border: solid 1px black;
      height: auto;
      position:absolute;
      bottom:0px;
      
    `}
  >
    <Nav />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
  )
}

export default App
