import React from 'react'
import "./css/Header.css"
import { Person, Forum } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import TinderLogo  from './img/tinder-logo.png'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <Person fontSize='large' className='header__icon'/>
        </IconButton>
        <img
            className='header__logo'
            src={TinderLogo}
            alt=""
        />
        <IconButton>
            <Forum fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default Header