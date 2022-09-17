/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Modeswitch from './Modeswitch.jsx'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext.jsx'

function Nav() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <nav
      className={darkMode ? `home-dark` : `home-light`}
      css={css`
        align-items: center;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 60px;
      `}
    >
      <ul
        css={css`
          display: flex;
          list-style: none;
          > li {
            margin-left: 20px;
          }
          & a {
            color: inherit;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        `}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button
        css={css`
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 20px;
          outline: none;
        `}
        className="dark-mode-button"
      >
        <Modeswitch></Modeswitch>
      </button>
    </nav>
  )
}

export default Nav
