/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'

const Modeswitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const handleClick = () => {
    toggleDarkMode()
  }
  return (
    <div
      css={css`
        background: none;
        border: none;
        cursor: pointer;
        margin-left: 20px;
        outline: none;
      `}
    >
      <FontAwesomeIcon
        onClick={handleClick}
        color={darkMode ? 'WHITE' : '34374c'}
        size="lg"
        icon={darkMode ? faSun : faMoon}
      />
    </div>
  )
}

export default Modeswitch
