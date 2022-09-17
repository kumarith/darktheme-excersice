/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Nav from './Nav'

function Shell() {
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

export default Shell
