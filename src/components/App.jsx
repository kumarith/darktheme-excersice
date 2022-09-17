/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

import { DarkModeProvider } from './context/DarkModeContext'
import { DarkModeContext } from './context/DarkModeContext'
import { useContext } from 'react'

import Shell from './Shell'
/* created shell to make all App components  be part of DarkModeProvider Context */

function App() {
  return (
    <DarkModeProvider>
      <Shell></Shell>
    </DarkModeProvider>
  )
}

export default App
